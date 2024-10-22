(function () {
    "use strict";
    
    angular.module('common')
    .service('UserDataService', UserDataService);
    
    UserDataService.$inject = ['$http', 'ApiPath', '$window'];
    function UserDataService($http, ApiPath, $window) {
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
        
            $window.localStorage.setItem('userData', JSON.stringify(userData))
            }
            return response
        });
      };
    
    
      service.showUserData = function () {
        var userInfo = JSON.parse($window.localStorage.getItem('userData'))
        
        console.log(userInfo)
        if (userInfo) {
            var user = {
                id: userInfo[0].id,
                firstName: userInfo[0].firstName,
                lastName: userInfo[0].lastName,
                email: userInfo[0].email,
                phone: userInfo[0].phone,
                faveDish: userInfo[0].faveDish,
                itemName: userInfo[0].itemName,
                category: userInfo[0].category,
                itemDescription: userInfo[0].itemDescription
            };
            return user
        }
       return null
        
        };
    
    }
    
    })();