'use strict';

var app = angular.module('cpcWorldCampaigns', [
    'ui.router',
    'ui.bootstrap'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/view/home.html',
        controller: 'homeController'
    });
    $stateProvider.state('company', {
        url: '/company/{id}',
        templateUrl: 'app/view/company.html',
        controller: 'companyController'
    });
});


Parse.initialize("5tehyNacfdDR1LtzBCKs67HtcBAlo4U2qAXEPTwk", "8pIUdIzMlyg6gbzrhXD6uIREnFRtUNRNXfEQdX54");
