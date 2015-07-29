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
            htmlmin: {}
        });


        var ojb = {
            "name": "ui.card",
            "service": "card/service/*.js",
            "controller": "card/controller/*.js",
            "directive": "card/directive/*.js",
            "view": "card/view/*.html"
        };

        var moduleAngular = module.createModule("test/ui/", ojb, options);
        grunt.file.write("result/ui.module.js", moduleAngular);
         
    });

};
