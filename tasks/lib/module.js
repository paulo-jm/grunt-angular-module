

/* global options */

/* global options */

/* global exports */

exports.init = function (grunt) {

    'use strict';

    var path = require('path');
    var view = require('./view').init(grunt);
    var UglifyJS = require('uglify-js');

    var exports = {};

    var template = "(function () {\n\n var app = angular.module(\"[moduleName]\", []);\n\n/*services*/\n[services]\n\n/*controllers*/\n[controllers]\n\n/*directives*/\n[directives]\n\n/*views*/\n[views]\n\n}());";

    exports.createModule = function (modulePath, options) {

        var moduleJson = grunt.file.readJSON(modulePath);
        var moduleDirPath = path.dirname(modulePath);
        var moduleFile = "";
        var key;
        
        for (key in moduleJson.modules) {

            var module = moduleJson.modules[key];
            var service = recursiveConcat(getFullPath(moduleDirPath, module.service), '');
            var controller = recursiveConcat(getFullPath(moduleDirPath, module.controller), '');
            var directive = recursiveConcat(getFullPath(moduleDirPath, module.directive), '');

            var views = view.renderTemplate(getFullPath(moduleDirPath, module.view), options);

            moduleFile += template
                    .replace("[moduleName]", module.name)
                    .replace("[services]", service)
                    .replace("[controllers]", controller)
                    .replace("[directives]", directive)
                    .replace("[views]", views);
        }
        
        var ast = UglifyJS.parse(moduleFile);
        var stream = UglifyJS.OutputStream(options.uglify);
        var code = ast.print(stream);
        return stream.toString();

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