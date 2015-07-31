/* global angular */
(function () {
    'use strict';

    var injectParams = ['$parse', '$log'];
    var ui = angular.module('ui.tab', []);

    var TabDirective = function TabDirective($parse, $log) {

        var compile = function(element, attrs, transclude) {
            
            return function postLink(scope, element, attrs, TabsetController) {
                
                scope.$watch('active', function (active) {
                    if (active) {
                        TabsetController.select(scope);
                    }
                });

                scope.disabled = false;
                if (attrs.disable) {
                    scope.$parent.$watch($parse(attrs.disable), function (value) {
                        scope.disabled = !!value;
                    });
                }

                // Deprecation support of "disabled" parameter
                // fix(tab): IE9 disabled attr renders grey text on enabled tab #2677
                // This code is duplicated from the lines above to make it easy to remove once
                // the feature has been completely deprecated
                if (attrs.disabled) {
                    $log.warn('Use of "disabled" attribute has been deprecated, please use "disable"');
                    scope.$parent.$watch($parse(attrs.disabled), function (value) {
                        scope.disabled = !!value;
                    });
                }

                scope.select = function () {
                    if (!scope.disabled) {
                        scope.active = true;
                    }
                };

                TabsetController.add(scope);
                scope.$on('$destroy', function () {
                    TabsetController.removeTab(scope);
                });

                //We need to transclude later, once the content container is ready.
                //when this link happens, we're inside a tab heading.
                scope.$transcludeFn = transclude;
                
            };
        };

        return {
            require: '^tabset',
            restrict: 'EA',
            replace: true,
            templateUrl: '/scaffolding/asset/js/ui/tab/view/tab.html',
            transclude: true,
            scope: {
                active: '=?',
                heading: '@',
                onSelect: '&select', //This callback is called in contentHeadingTransclude
                //once it inserts the tab's content into the dom
                onDeselect: '&deselect'
            },
            compile: compile
        };
    };

    TabDirective.$inject = injectParams;
    ui.directive('tab', TabDirective);

}());