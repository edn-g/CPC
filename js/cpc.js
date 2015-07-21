'use strict';


/**
 * Déclaration de l'application cpc
 */
var cpc = angular.module('cpc', [
    // Dépendances
    'dashboard',
	'ui.router'
]);

/**
 * Configuration de l'application cpc
 */
cpc.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl'
		})
	;
});

/**
 * Déclaration du module dashboard
 */
var dashboard = angular.module('dashboard',[]);

/**
 * Contrôleur de l'application dashboard
 */
dashboard.controller('DashboardCtrl', function ($scope) {
	$scope.company = {
		name: 'Cleaning Pacific Company S.A.',
		date: new Date(),
		logo: 'http://www.ufrog.fr/swtor/wp-content/uploads/sites/2/2013/01/ffda176acef729503110112a65111774canarddacier1.jpg'
	};
});

/**
 * Contrôleur de l'application home
 */
dashboard.controller('HomeCtrl', function ($scope, $interval) {
	$scope.title = 'Home';
	$scope.description = 'Main page';
	$scope.message = 'Welcome!';
	
	$scope.time = new Date(0,0);
	$scope.timeStatus = 'Loading...';
	$interval(function() {
		$scope.time = new Date();
		$scope.timeStatus = 'Started';
	}, 1000);
});