/* global angular */
(function () {
    'use strict';

    var injectParams = [];
    var ui = angular.module('ui.tabs', []);

    var TabsetController = function TabsetController($scope) {

        var tabs = $scope.tabs || [];

        $scope.select = function (selected) {
            angular.forEach(tabs, function (tab) {

                if (tab.active && tab !== selected) {
                    tab.active = false;
                    tab.onDeselect();
                }
            });

            selected.active = true;
            selected.onSelect();
        };

        $scope.add = function (tab) {

            tabs.push(tab);

            if (tabs.length === 1 && tab.active !== false) {
                tab.active = true;
            } else if (tab.active) {
                $scope.select(tab);
            } else {
                tab.active = false;
            }
        };

        $scope.remove = function (tab) {

            var index = tabs.indexOf(tab);

            if (tab.active && tabs.length > 1 && !destroyed) {
                var newActiveIndex = index === tabs.length - 1 ? index - 1 : index + 1;
                var tabActive = tabs[newActiveIndex];
                $scope.select(tabActive);
            }

            tabs.splice(index, 1);

        };

        var destroyed;
        $scope.$on("$destroy", function () {
            destroy = true;
        });

    };

    TabsetController.$inject = injectParams;
    ui.controller('TabsetController', TabsetController);

}());