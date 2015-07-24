'use strict';

app.factory('Company', function() {
    return function(id) {
        this.id = id;
        this.name = null;
        this.logoUrl = null;
        this.reputation = {rate: 0, comment: null};
    };
});

app.service('CompanyManager', function($q, Company) {
    var ParseCompany = Parse.Object.extend('Company');

    var loadCompany = function(obj) {
        var company = new Company(obj.id);

        company.name = obj.get('name');
        var logo = obj.get('logo');
        if (logo) {
            company.logoUrl = logo.url();
        }

        company.reputation.rate = obj.get('reputationRate');
        company.reputation.comment = obj.get('reputationComment');

        return company;
    };

    this.findAll = function() {
        var deferred = $q.defer();

        var query = new Parse.Query(ParseCompany);
        query.find({
            success: function(results) {
                var data = [];
                angular.forEach(results, function(result) {
                    data.push(loadCompany(result));
                });
                deferred.resolve(data);
            },
            error: function(error) {
                deferred.reject(error);
            }
        });

        return deferred.promise;
    };

    this.findById = function(id) {
        var deferred = $q.defer();

        var query = new Parse.Query(ParseCompany);
        query.get(id, {
            success: function(result) {
                deferred.resolve(loadCompany(result));
            },
            error: function(error) {
                deferred.reject(error);
            }
        });

        return deferred.promise;
    };
});
