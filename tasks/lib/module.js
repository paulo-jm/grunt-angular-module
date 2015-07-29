

/* global options */

/* global options */

/* global exports */

exports.init = function (grunt) {

    'use strict';

    var path = require('path');
    var view = require('./view').init(grunt);

    var exports = {};

    var template = "/* global angular */\n(function () {\n\n var app = angular.module(\"[moduleName]\", []);\n\n/*services*/\n[services]\n\n/*controllers*/\n[controllers]\n\n/*directives*/\n[directives]\n\n/*views*/\n[views]\n\n}());";

    exports.createModule = function (dirPath, module, options) {

        var service = recursiveConcat(getFullPath(dirPath, module.service), '');
        var controller = recursiveConcat(getFullPath(dirPath, module.controller), '');
        var directive = recursiveConcat(getFullPath(dirPath, module.directive), '');

        var views = view.renderTemplate(getFullPath(dirPath, module.view), options);

        return template
                .replace("[moduleName]", module.name)
                .replace("[services]", service)
                .replace("[controllers]", controller)
                .replace("[directives]", directive)
                .replace("[views]", views);

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
                result += grunt.file.read(file);
            }
        });
        return result;
    };

    return exports;

};