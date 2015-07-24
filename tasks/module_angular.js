/*
 * grunt-angular-module
 * https://github.com/pauojm/grunt-angular-module
 *
 * Copyright (c) 2015 Paulo Jose Moreira
 * Licensed under the MIT license.
 */

/* global module, require */

'use strict';

module.exports = function (grunt) {

    var path = require('path');
    var minify = require('html-minifier').minify;

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    grunt.registerMultiTask('ngModule', 'The best Grunt plugin ever.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            punctuation: '.',
            separator: ', ',
            quoteChar: '"',
            indentString: '  ',
            htmlmin: {},
        });

        // Iterate over all specified file groups.      

        this.files.forEach(function (f) {
            // Concat specified files.
            renderTemplate("app", f, options);

        });

    });

    var renderTemplate = function (moduleName, f, options) {

        var template = "[moduleName].run(['$templateCache', function($templateCache) {\n\n[views]\n\n}]);";

        // Concat specified files.
        var views = f.src.filter(function (filepath) {
            // Warn on and remove invalid source files (if nonull was set).
            if (!grunt.file.exists(filepath)) {
                grunt.log.warn('Source file "' + filepath + '" not found.');
                return false;
            } else {
                return true;
            }
        }).map(function (filepath) {

            var html = getHtml(filepath, options);
            return renderView(filepath, html, options);

        }).join(grunt.util.normalizelf(options.separator));

        var ngTemplate = template.replace("[moduleName]", moduleName).replace("[views]", views);

        grunt.file.write(f.dest, ngTemplate);

        // Print a success message.
        grunt.log.writeln('File "' + f.dest + '" created.');

    };

    var renderView = function (viewName, view, options) {

        var template = "\t$templateCache.put('[viewName]', \n\t '[view]);\t\n'";
        return template.replace("[viewName]", viewName).replace("[view]", view);

    };

    // return template content
    var getHtml = function (filepath, options) {

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

        return escapeContent(content, options.quoteChar, options.indentString);
    };

    var escapeContent = function (content, quoteChar, indentString) {
        var bsRegexp = new RegExp('\\\\', 'g');
        var quoteRegexp = new RegExp('\\' + quoteChar, 'g');
        var nlReplace = '\\n' + quoteChar + ' +\n' + indentString + indentString + quoteChar;
        return content.replace(bsRegexp, '\\\\').replace(quoteRegexp, '\\' + quoteChar).replace(/\r?\n/g, nlReplace);
    };

};
