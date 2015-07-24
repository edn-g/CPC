'use strict';

app.controller('companyController', function($scope, $stateParams, CompanyManager) {
    CompanyManager.findById($stateParams.id).then(function(company) {
        company.commander = 'Machin Bidule';
        company.reputation = {rate: 0.75, comment: 'Efficace et pas cher !'};
        $scope.company = company;
    });
});
