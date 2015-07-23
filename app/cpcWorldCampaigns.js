'use strict';

var app = angular.module('cpcWorldCampaigns', [
    'ui.router',
    'ui.bootstrap'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'homeController'
        });
});


Parse.initialize("5tehyNacfdDR1LtzBCKs67HtcBAlo4U2qAXEPTwk", "8pIUdIzMlyg6gbzrhXD6uIREnFRtUNRNXfEQdX54");
