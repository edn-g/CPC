'use strict';

app.service('UserManager', ['$q', function($q) {

    // Company object
    var User = Parse.Object.extend('User', {
        isCommanderOf: function(company) {
            var commander = company.get('commander');
            return commander ? (commander.id === this.id) : false;
        },
        isAdmin: function() {
            return false; // TODO: Implement this
        },

        exportView: function() {
            this.username = this.get('username');
            this.password = null;
            this.email = this.get('email');

            return this;
        }
    });

    this.login = function(username, password) {
        return Parse.User.logIn(username, password);
    };

    this.logout = function() {
        return Parse.User.logOut();
    };

    this.getCurrent = function() {
        var user = Parse.User.current();
        return user ? user : new User();
    };
}]);
