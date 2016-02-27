/*
 * grunt-angular-module
 * https://github.com/pauojm/grunt-angular-module
 *
 * Copyright (c) 2015 Paulo Jose Moreira
 * Licensed under the MIT license.
 */

/* global module */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        debug: {
            options: {
                open: true // do not open node-inspector in Chrome automatically 
            }
        },
        // Configuration to be run (and then tested).
        ngModule: {
            options: {
                uglify: {
                    beautify: true
                }
            },
            files: 
                {
                    src: 'test/**/module.json',
                    dest: 'result/test.js',
                }
            
        },

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-debug-task');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['ngModule', 'debug']);

};
