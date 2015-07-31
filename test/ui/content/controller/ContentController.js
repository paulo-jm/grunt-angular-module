/* global angular */
(function () {
    'use strict';

    var injectParams = [];
    var ui = angular.module('ui.content', []);
   
    var ContentController = function ContentController($scope) {};

    ContentController.$inject = injectParams;
    ui.controller('ContentController', ContentController);

}());