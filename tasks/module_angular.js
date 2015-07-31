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
    var module = require('./lib/module').init(grunt);

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
            uglify: {}
        });

        this.files.forEach(function (file) {

            var contents = file.src.filter(function (filepath) {
                // Remove nonexistent files (it's up to you to filter or warn here).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                // Read and return the file's source.
                return module.createModule(filepath, options);

            }).join('\n');
            // Write joined contents to destination filepath.
            grunt.file.write(file.dest, contents);
            // Print a success message.
            grunt.log.writeln('File "' + file.dest + '" created.');
            
        });

    });

};
