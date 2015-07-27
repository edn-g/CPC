'use strict';

app.controller('companyController', function($scope, $state, $stateParams, CompanyManager) {
    CompanyManager.findById($stateParams.id).then(
        function(company) {
            company.commander = 'Machin Bidule';
            $scope.company = company.exportView();
        },
        function(error) {
            $state.go('home'); // TODO: 404 error page or alert
        }
    );
});
