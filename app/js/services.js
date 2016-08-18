angular.module('starter.services')
.service('userService', ['$http', function ($http) {

  this.createUser = function(){
    $var req = {
      method: 'POST',
      url: 'https://api.stormpath.com/v1/applications/2eHVYFXNAQUtF0jnCrTIVz/accounts',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic NVNBUFZWOVpOSUNSUVBGNDFLQk1NTzZLVTplVXAxY3JHNUhKMU03RWpKMFJrNjhIMlMvUmdkQ1NYUnYybEhIZThhQjRn'
      },
      data: {
        "givenName": "Joe",
        "surname": "Stormtrooper",
        "username": "tk421",
        "email": "tk421@stormpath.com",
        "password":"Changeme1"
      }
    };

    $http(req).then(function(response){ return( response.data );}, function(response){return( response.data.message);}
  });
};

this.authorizeUser = function(){
  $var req = {
    method: 'POST',
    url: 'https://api.stormpath.com/v1/applications/2eHVYFXNAQUtF0jnCrTIVz/loginAttempts',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic NVNBUFZWOVpOSUNSUVBGNDFLQk1NTzZLVTplVXAxY3JHNUhKMU03RWpKMFJrNjhIMlMvUmdkQ1NYUnYybEhIZThhQjRn'
    },
    data: {
      "type": "basic",
      "value": "dGs0MjE6Q2hhbmdlbWUx"
    }
  };

  $http(req).then(function(response){ return(response.data);}, function(response){return( response.data.message);}
});

this.getUser = function(){
  $var req = {
    method: 'GET',
    url: 'https://api.stormpath.com/v1/accounts/6qNpmKaJujfXEs1XWDtaC0',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic NVNBUFZWOVpOSUNSUVBGNDFLQk1NTzZLVTplVXAxY3JHNUhKMU03RWpKMFJrNjhIMlMvUmdkQ1NYUnYybEhIZThhQjRn'
    }
  };

  $http(req).then(function(response){ return( response.data );}, function(response){return( response.data.message);}
});

};
}]);
