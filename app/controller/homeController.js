'use strict';

app.controller('homeController', function($scope, CompanyManager) {
    CompanyManager.findAll().then(function(companies) {
        $scope.companies = companies.exportView();
    });
});
