'use strict';

/**
 * @ngdoc directive
 * @name personalSiteApp.directive:resumeCard
 * @description
 * # resumeCard
 */
angular.module('personalSiteApp')
  .directive('resumeCard', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the resumeCard directive');
      }
    };
  });
