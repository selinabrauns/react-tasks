var fetch = window.fetch;
if(!fetch) {
    fetch = require('node-fetch');
}

var root = 'http://jsonplaceholder.typicode.com';

module.exports = function(){
    return {
        get: function(url){
            return fetch(root + url, {method: 'GET'}).then(function(data){
                return data.json();
            });
        }
    }
}();