(function () {
    'use strict';

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserDataService'];
    function SignUpController (UserDataService) {
        var user = this;

        user.firstName = ''
        user.lastName = ''
        user.email = ''
        user.phone = ''
        user.menuNum = ''
        user.message = ''
        user.itemExists = true

        user.saveUser = function() {
            var promise = UserDataService.saveUserData(
                user.firstName,
                user.lastName,
                user.email,
                user.phone,
                user.menuNum
                );
            promise.then(function (response) {
                if (response.data === null) {
                    user.itemExists = false
                    user.message = 'No such menu number exists.'
                } else {
                    user.message = 'Your information has been saved'
                }
              })
              .catch(function (err) {
                console.log(err);
              });
              };
        }

        // user.saveUser = function (first, last, email, phone, item) {
        //     console.log('Access to function')
        //     var promise = UserDataService.saveUserData(first, last, email, phone, item);
        //     promise.then(function (response) {
        //     // if (response.data === null) {
        //     //     user.itemExists = false
        //     //     user.message = 'No such menu number exists.'
        //     // } else {
        //     //     user.itemsExists = true
        //     //     user.message = 'Your information has been saved'
        //     // }
        //     return response
        //   })
        //   .catch(function (err) {
        //     console.log(err);
        //   });
        //   return user
        //   };
    

})();