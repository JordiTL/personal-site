'use strict';

describe('Directive: resumeCard', function () {

  // load the directive's module
  beforeEach(module('personalSiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<resume-card></resume-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the resumeCard directive');
  }));
});
