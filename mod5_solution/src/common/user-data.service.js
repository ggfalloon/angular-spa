(function () {
    "use strict";
    
    angular.module('common')
    .service('UserDataService', UserDataService);
    
    UserDataService.$inject = ['$http', 'ApiPath'];
    function UserDataService($http, ApiPath) {
       var userData = [{
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        faveDish: '' 
       }];

      var service = this;
    
      service.saveUserData = function (firstName, lastName, email, phone, shortName) {
        var category = shortName.slice(0, 1)
        var menuNum = shortName.pop(category) - 1
        var newId = userData.length > 0 ? Math.max(...userData.map(u => u.id)) + 1 : 1;

        return $http.get(ApiPath + '/menu-items/' + category + '/menu_items/' + menuNum + '.json')
        .then(function (response) {
            console.log(response.data)
            if(response.data !== null) {
                var user = {
                    id: newId,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    faveDish: shortName
                };
            userData.push(user)
            console.log(userData)
            }
            return response.data
        });
      };
    
    
    //   service.getMenuItems = function (category) {
    //     return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
    //       return response.data;
    //     });
    //   };
    
    }
    
    })();