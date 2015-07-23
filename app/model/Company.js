'use strict';

app.factory('Company', function() {
    return function(id, name, logoUrl) {
        this.id = id;
        this.name = name;
        this.logoUrl = logoUrl;
    };
});

app.service('CompanyManager', function($q, Company) {
    var ParseCompany = Parse.Object.extend('Company');

    var loadCompany = function(obj) {
        var company = new Company(obj.id, obj.get('name'));
        var logo = obj.get('logo');
        if (logo) {
            company.logoUrl = logo.url();
        }

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
});
