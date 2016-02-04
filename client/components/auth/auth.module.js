'use strict';

angular.module('slackFileManagerApp.auth', [
  'slackFileManagerApp.constants',
  'slackFileManagerApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
