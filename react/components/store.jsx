var Reflux = require('reflux'),
    Actions = require('./actions'),
    Api = require('./api');

module.exports = Reflux.createStore({

    listenables: [Actions],

    getUsers: function(){
        return Api.get('/users').then(function(json){
            this.user = json;
            this.trigger('userList', this.user);
        }.bind(this));
    }
});