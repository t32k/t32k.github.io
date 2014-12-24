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
      },
      critical: {
        files: {
          '_templates/includes/critical.min.css': ['_templates/includes/critical.css']
        }
      }
    },
    criticalcss: {
      dist: {
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
    },
    perfbudget: {
      dist: {
        options: {
          url: 'http://t32k.me',
          key: 'API_KEY_HERE'
        }
      }
    },
    watch: {
      dist: {
        files: ['**/*.jade'],
        tasks: ['jade']
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-perfbudget');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['criticalcss', 'csso', 'jade']);
};

