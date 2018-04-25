module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    watch: {
      options: { livereload: true },
      files: [
        "views/**",
        "public/**",
        "controllers/**",
        "handlers/**",
        "routes/**",
        "**/*.js",
        "!node_modules/**/*.js"
      ],
      tasks: []
    },
    cssmin: {
      my_target: {
        files: [
          {
            expand: true,
            cwd: "public/css/",
            src: ["*.css"],
            dest: "dist/css/",
            ext: ".min.css"
          }
        ]
      }
    },
    express: {
      all: {
        options: {
          port: 3000,
          hostname: "localhost",
          bases: ["./public"],
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-express");
  grunt.registerTask("server", ["express", "watch", "cssmin"]);
};
