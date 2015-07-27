'use strict';

app.service('CompanyManager', ['$q', function($q) {

    // Company object
    var Company = Parse.Object.extend('Company', {
        exportView: function() {
            this.name = this.get('name');
            var logo = this.get('logo');
            if (logo) {
                this.logoUrl = logo.url();
            }

            this.reputation = {
                rate: this.get('reputationRate') * 5, // 5 is max rate stars
                comment: this.get('reputationComment')
            };

            return this;
        }
    });

    var CompanyCollection = Parse.Collection.extend({
        model: Company,
        query: new Parse.Query(Company),
        exportView: function() {
            var data = []
            angular.forEach(this, function(company) {
                data.push(company.exportView());
            });
            return data;
        }
    });

    // Cache
    var companies = new CompanyCollection();

    this.findAll = function() {
        var deferred = $q.defer();

        if (companies.length) {
            deferred.resolve(companies);
        } else {
            companies.fetch({
                success: function(result) {
                    deferred.resolve(result);
                },
                error: function(error) {
                    deferred.reject(error);
                }
            });
        }

        return deferred.promise;
    };

    this.findById = function(id) {
        var deferred = $q.defer();

        this.findAll().then(
            function(result) {
                var company = result.get(id);
                if (company instanceof Company) {
                    deferred.resolve(company);
                } else {
                    deferred.reject('Company ID not found');
                }
            },
            function(error) {
                deferred.reject(error);
            }
        );

        return deferred.promise;
    };
}]);
