
exports.init = function (grunt) {

    'use strict';

    var path = require('path');
    var view = require('./view').init(grunt);
    var UglifyJS = require('uglify-js');

    var exports = {};

    var subModuleTemplate = "(function () {\n\n\"use strict\";\n\n var app = angular.module(\"[moduleName]\", [[requiredModule]]);\n\n/*services*/\n[services]\n\n/*controllers*/\n[controllers]\n\n/*directives*/\n[directives]\n\n/*views*/\n[views]\n\n}());";
    var moduleTemplate = "(function () {\n\n\"use strict\";\n\n var app = angular.module(\"[moduleName]\", [[requiredModule]]);\n\n /*config*/\n[config]\n\n }()); ";

    exports.createModule = function (modulePath, options) {

        var moduleJson = grunt.file.readJSON(modulePath);
        var moduleDirPath = path.dirname(modulePath);
        var modulesAsString = "";
        var key;
        
        for (key in moduleJson.modules) {

            var module = moduleJson.modules[key];

            modulesAsString += createSubModule(moduleDirPath, module, options);

        }

        var config = recursiveConcat(getFullPath(moduleDirPath, moduleJson.config), '');
        
        modulesAsString += moduleTemplate
                .replace("[moduleName]", moduleJson.name)
                .replace("[config]", config)
                .replace("[requiredModule]", moduleJson.requiredModule);

        var ast = UglifyJS.parse(modulesAsString);
        var stream = UglifyJS.OutputStream(options.uglify);
        var code = ast.print(stream);
        return stream.toString();

    };

    var createSubModule = function (moduleDirPath, module, options) {

        var subModulesAsString = "";
        
        var service = recursiveConcat(getFullPath(moduleDirPath, module.service), '');
        var controller = recursiveConcat(getFullPath(moduleDirPath, module.controller), '');
        var directive = recursiveConcat(getFullPath(moduleDirPath, module.directive), '');

        var views = view.renderTemplate(getFullPath(moduleDirPath, module.view), options);

        subModulesAsString += subModuleTemplate
                .replace("[moduleName]", module.name)
                .replace("[requiredModule]", module.requiredModule)
                .replace("[services]", service)
                .replace("[controllers]", controller)
                .replace("[directives]", directive)
                .replace("[views]", views);

        return subModulesAsString;

    };

    var getFullPath = function (dirPath, modulePath) {

        return path.join(dirPath, modulePath);

    };

    var recursiveConcat = function (source, result) {
        grunt.file.expand(source).forEach(function (file) {
            if (grunt.file.isDir(file)) {
                grunt.file.recurse(file, function (f) {
                    result = recursiveConcat(f, result);
                });
            } else {
                grunt.log.writeln('Concatenating ' + file + ' to other ' + result.length + ' characters.');

                result += trim(grunt.file.read(file));
            }
        });
        return result;
    };

    function trim(str) {
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        return str.replace(rtrim, '');
    }

    return exports;

};