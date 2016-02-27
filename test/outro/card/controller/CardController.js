/* global app */
(function (app) {
    'use strict';

    var injectParams = [];
   
    var CardController = function CardController($scope) {};

    CardController.$inject = injectParams;
    app.controller('CardController', CardController);

}(app));