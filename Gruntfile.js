module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    csso: {
      skeleton: {
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
      },
      critical: {
        files: {
          '_templates/includes/critical.min.css': ['_templates/includes/critical.css']
        }
      }
    },
    criticalcss: {
      custom_options: {
        options: {
          url: "http://localhost:8000",
          width: 1024,
          height: 768,
          outputfile: "_templates/includes/critical.css",
          filename: "skeleton.min.css"
        }
      }
    },
    jade: {
      dist: {
        options: {
          // pretty: true
        },
        files: {
          "index.html": ["_templates/index.jade"]
        }
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Default task
  grunt.registerTask('build', ['criticalcss', 'csso', 'jade']);
};

