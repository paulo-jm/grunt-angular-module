

/* global options */

/* global options */

/* global exports */

exports.init = function (grunt) {

    'use strict';

    var path = require('path');
    var template = "app.run(['$templateCache', function($templateCache) {[views]\n\n}]);";
    var templateView = "\n\n$templateCache.put(\"[viewName]\", \n    \"[view]\");";

    var exports = {};

    exports.renderTemplate = function (dirPath,  options) {

        var views = "";
        grunt.file.expand(dirPath).forEach(function (filepath) {

            var view = exports.getHtml(filepath, options);
            var viewName = path.basename(filepath);
            views += exports.renderView(viewName, view);

        });

        return template.replace("[views]", views);

    };

    exports.renderView = function (viewName, view) {
        return templateView.replace("[viewName]", viewName).replace("[view]", view);
    };

    // return template content
    exports.getHtml = function (filepath, options) {

        var html = grunt.file.read(filepath);
        if (Object.keys(options.htmlmin).length) {
            try {
                html = minify(html, options.htmlmin);
            } catch (err) {
                grunt.warn(filepath + '\n' + err);
            }
        }

        // trim leading whitespace
        var content = html.replace(/(^\s*)/g, '');

        return exports.escapeContent(content, options.quoteChar, options.indentString);
    };

    exports.escapeContent = function (content, quoteChar, indentString) {
        var bsRegexp = new RegExp('\\\\', 'g');
        var quoteRegexp = new RegExp('\\' + quoteChar, 'g');
        var nlReplace = '\\n' + quoteChar + ' +\n' + indentString + indentString + quoteChar;
        return content.replace(bsRegexp, '\\\\').replace(quoteRegexp, '\\' + quoteChar).replace(/\r?\n/g, nlReplace);
    };

    return exports;

};