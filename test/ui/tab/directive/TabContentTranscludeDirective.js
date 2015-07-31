/* global angular */
(function () {
    'use strict';

    var injectParams = [];
    var ui = angular.module('ui.tabs', []);

    var TabHeadingTranscludeDirective = function TabHeadingTranscludeDirective() {

        var link = function (scope, element, attrs, ngModel) {
            var tab = scope.$eval(attrs.tabContentTransclude);

            //Now our tab is ready to be transcluded: both the tab heading area
            //and the tab content area are loaded.  Transclude 'em both.
            tab.$transcludeFn(tab.$parent, function (contents) {
                angular.forEach(contents, function (node) {
                    if (isTabHeading(node)) {
                        //Let tabHeadingTransclude know.
                        tab.headingElement = node;
                    } else {
                        element.append(node);
                    }
                });
            });
        };

        function isTabHeading(node) {
            return node.tagName && (
                    node.hasAttribute('tab-heading') ||
                    node.hasAttribute('data-tab-heading') ||
                    node.tagName.toLowerCase() === 'tab-heading' ||
                    node.tagName.toLowerCase() === 'data-tab-heading'
                    );
        }

        return {
            restrict: 'A',
            require: '^tabset',
            link: link
        };
    };

    TabHeadingTranscludeDirective.$inject = injectParams;
    ui.directive('tabHeadingTransclude', TabHeadingTranscludeDirective);

}());