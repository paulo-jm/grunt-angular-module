/* global angular */
(function () {
    'use strict';

    var injectParams = [];
    var ui = angular.module('ui.tabs', []);

    var TabsetDirective = function TabsetDirective() {

        var link = function (scope, element, attrs, ngModel) {
            scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
            scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
        };

        return {
            restrict: 'AE',
            scope: {
                type: '@'
            },
            replace: true,
            transclude: true,
            link: link,
            controller: 'TabsetController',
            templateUrl: "/scaffolding/asset/js/ui/tab/view/card.html"
        };
    };

    TabsetDirective.$inject = injectParams;
    ui.directive('tabs', TabsetDirective);

}());






