(function () {
    "use strict";
    
    angular.module('common')
    .service('UserDataService', UserDataService);
    
    UserDataService.$inject = ['$http', 'ApiPath'];
    function UserDataService($http, ApiPath) {
       var userData = [];

      var service = this;

      service.saveUserData = function (firstName, lastName, email, phone, shortName) {
        var firstName = firstName.trim()
        var lastName = lastName.trim()
        var category = shortName.slice(0, 1)
        var menuNum = shortName.slice(1) - 1
        var newId = userData.length > 0 ? Math.max(...userData.map(u => u.id)) + 1 : 1;

        return $http.get(ApiPath + '/menu_items/' + category + '/menu_items/' + menuNum + '.json')
        .then(function (response) {
            console.log(response.data)
            if(response.data !== null) {
                var user = {
                    id: newId,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    faveDish: shortName,
                    itemName: response.data.name,
                    category: category,
                    itemDescription: response.data.description
                };
            userData.push(user)
            console.log(userData)
            }
            return response
        });
      };
    
    
      service.showUserData = function () {
        console.log(userData)
        return userData
        
        };
    
    }
    
    })();