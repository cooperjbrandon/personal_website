module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'js/*.js', // All libraries
                ],
                dest: 'js/build/application.js',
            }
        },

        uglify: {
            build: {
                src: 'js/build/application.js',
                dest: 'js/build/application.min.js'
            }
        },

        cssmin: {
            build: {
                src: ['css/grid.css', 'css/normalize.css', 'css/style.css'],
                dest: 'css/build/application.css'
            }
        },


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};