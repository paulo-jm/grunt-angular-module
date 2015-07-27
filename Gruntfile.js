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
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },
        // Configuration to be run (and then tested).
        ngModule: {
            ui: {
                options: {
                },
                files: {
                    'result/custom_options.js': ['test/**/*.html']
                }

            }
        },
        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-debug-task');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'ngModule', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
