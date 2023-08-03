module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                files: {
                    './dev/styles/main.css' : './source/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    './dist/styles/main.min.css' : './source/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    './dist/scripts/main.min.js' : './source/scripts/main.js'
                }
            }
        }
    })


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default',['less:production', 'uglify']);
}