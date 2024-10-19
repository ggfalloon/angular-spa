(function () {
    'use strict';

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserDataService'];
    function SignUpController (UserDataService) {
        var user = this;
        // first = user.firstName
        // user.firstName = first
        // user.newUser.lastName = last
        // user.newUser.email = email
        // user.newUser.phone = phone
        // user.newUser.menuNum = item
        user.message = ''

        user.saveUser = function (first, last, email, phone, item) {
            console.log(first, last)
            var promise = UserDataService.saveUserData(first, last, email, phone, item);
            promise.then(function (response) {
            if (response.data === null) {
                user.itemExists = false
                user.message = 'No such menu number exists.'
            } else {
                user.itemsExists = true
                user.message = 'Your information has been saved'
            }
          })
          .catch(function (err) {
            console.log(err);
          });
        //   return list.items
          };
    }

})();