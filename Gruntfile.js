module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= props.license %> */\n',
        // Task configuration
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        },
        csso: {
            compress: {
                options: {
                    banner: '/*' +
                            '* Skeleton V2.0.2' +
                            '* Copyright 2014, Dave Gamache' +
                            '* www.getskeleton.com' +
                            '* Free to use under the MIT license.' +
                            '* http://www.opensource.org/licenses/mit-license.php' +
                            '* 12/15/2014' +
                            '*/'
                },
                files: {
                    'skeleton.min.css': ['skeleton.css']
                }
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-csso');

    // Default task
    grunt.registerTask('default', ['csso']);
};

