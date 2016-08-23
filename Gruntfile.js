
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/assets/styles/styles.min.css': 'app/assets/styles/styles.css'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'app/assets/styles/styles.css': 'app/assets/styles/styles.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('min', ['cssmin']);


};
