module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    csso: {
      dist: {
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
    },
    jade: {
      dist: {
        options: {
          pretty: true
        },
        files: {
          "index.html": ["_templates/index.jade"]
        }
      }
    },
    watch: {
      dist: {
        files: ['**/*.jade', '**/*.css'],
        tasks: ['build']
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['csso', 'jade']);
};

