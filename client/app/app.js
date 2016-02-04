'use strict';

angular.module('slackFileManagerApp', [
  'slackFileManagerApp.auth',
  'slackFileManagerApp.admin',
  'slackFileManagerApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
