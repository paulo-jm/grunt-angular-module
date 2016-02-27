/* global app */
(function (app) {
    'use strict';

    var injectParams = [];   
    var CardDirective = function CardDirective () {

        var link = function (scope, element, attrs, ngModel) {};

        return {
            restrict: 'AE',
            scope: true,
            replace: true,
            transclude : true,
            link: link,
            controller: 'CardController',
            templateUrl: "card.html"
        };

    };

    CardDirective.$inject = injectParams;
    app.directive('card', CardDirective);

}(app));