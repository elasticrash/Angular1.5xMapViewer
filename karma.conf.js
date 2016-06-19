// Karma configuration
// Generated on Fri May 13 2016 09:57:36 GMT+0100 (GMT Daylight Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.html': ['ng-html2js'],
      'app/**/*.json': ['ng-json2js'],
      'app/**/!(*.mock|*.spec).js': ['coverage']
    },
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-ng-json2js-preprocessor',
      'karma-ng-html2js-preprocessor',
      'karma-coverage'
    ],
    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-component-router/angular_1_router.js',
      'bower_components/angular-simple-logger/dist/angular-simple-logger.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/leaflet/dist/leaflet.js',
      'bower_components/proj4/dist/proj4-src.js',
      'app/app.component.js',
      'app/angularΗelper.js',
      'app/**/*.js',
      'unitTest/**/*.js',
      'app/**/*.html',
      'app/config/*.json'
    ],


    // list of files to exclude
    exclude: [
    ],

    ngHtml2JsPreprocessor: {
      stripPrefix: '',
      moduleName: 'templates'
    },

    ngJson2JsPreprocessor: {
      stripPrefix: ''
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'html',
      // output coverage reports
      dir: 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
