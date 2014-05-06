module.exports = function(grunt) {

    var config = {};

    // Concat all files
    config.concat = {
        dist: {
            src: [
                "components/jquery/dist/jquery.js",
                "components/angular/angular.js",
                "components/angular-ui-router/release/angular-ui-router.js",
                "components/angular-ui-utils/ui-utils.min.js",
                "scripts/app.js",
                "scripts/services/*.js",
                "scripts/filters/*.js",
                "scripts/directives/*.js",
                "scripts/controllers/*.js",
                "scripts/config/*.js"
            ],
            dest: "build/app.js"
        }
    };

    // uglify files
    config.uglify = {
        options: {
            report: 'gzip'
        },
        application: {
            files: {
                "build/app.min.js": ["build/app.js"]
            }
        }
    };

    // sass
    config.sass = {
        dist: {
            files: {
                'build/main.css': 'scss/main.scss'
            }
        }
    };


    // watcher
    config.watch = {
        js: {
            files: [
                'scripts/**/*.js',
                '!**/node_modules/**',
                'Gruntfile.js'
            ],
            tasks: ["concat"]
        },
        scss: {
            files: [
                "scss/**/*.scss"
            ],
            tasks: ["sass"]
        }
    };

    grunt.initConfig(config);
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Default task
    grunt.registerTask("default", ["concat", "uglify", "sass"]);

    // Watcher task
    grunt.registerTask("devwatch", ["watch"]);

    // Sass
    grunt.registerTask("scss", ["sass"]);

};