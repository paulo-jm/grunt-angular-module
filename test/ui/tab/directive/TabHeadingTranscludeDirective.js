/* global angular */
(function () {
    'use strict';

    var injectParams = [];
    var ui = angular.module('ui.tabs', []);

    var TabHeadingTranscludeDirective = function TabHeadingTranscludeDirective() {

        var link = function (scope, element, attrs, ngModel) {
            scope.$watch('headingElement', function updateHeadingElement(heading) {
                if (heading) {
                    element.html('');
                    element.append(heading);
                }
            });
        };

        return {
            restrict: 'A',
            require: '^tab',
            link: link
        };
    };

    TabHeadingTranscludeDirective.$inject = injectParams;
    ui.directive('tabHeadingTransclude', TabHeadingTranscludeDirective);

}());