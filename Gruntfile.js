module.exports = function(grunt) {
  var ROOT = 'client/',
      JS = ROOT + 'js/',
      LIBS = JS + 'vendor/',
      SASS = ROOT + 'sass/',
      OUTPUT_CSS = ROOT + 'css/';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          LIBS + 'jquery/*.js',
          LIBS + 'bootstrap/*.js',
          
          JS + '*.js',
        ],
        dest: JS + 'dist/main.min.js',
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: [SASS],
          cssDir: ['public/css/'],
          environment: 'development'
        }
      }
    },
    watch: {
      script: {
        files: [JS + '*.js', LIBS + '**/*.js'],
        tasks: ['concat']
      },
      compass: {
          files: [SASS + '*.scss'],
          tasks: ['compass']
      }
    }
  });  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', ['concat', 'compass', 'watch']); 
  grunt.loadTasks('build/tasks');
};