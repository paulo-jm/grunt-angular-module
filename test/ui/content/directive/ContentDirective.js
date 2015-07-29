/* global angular */
(function () {
    'use strict';

    var injectParams = [];
    var ui = angular.module('ui.content', []);
    
    var ContentDirective = function ContentDirective () {

        var link = function (scope, element, attrs, ngModel) {};

        return {
            restrict: 'AE',
            scope: true,
            replace: true,
            transclude : true,
            link: link,
            controller: 'ContentController',
            templateUrl: "/scaffolding/asset/js/ui/content/view/content.html"
        };

    };

    ContentDirective.$inject = injectParams;
    ui.directive('content', ContentDirective);

}());