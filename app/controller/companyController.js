'use strict';

app.controller('companyController', function($scope, $stateParams, CompanyManager) {
    CompanyManager.findById($stateParams.id).then(function(company) {
        company.commander = 'Machin Bidule';
        $scope.company = company;
    });
});
