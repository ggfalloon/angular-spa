(function () {
    'use strict';
    
    angular.module('data', [])
    .controller('MenuAppController', MenuAppController)
    .service('MenuDataService', MenuDataService);

    // function FoundItemsDirective (){
    //     var ddo = {
    //             scope: {
    //                 foundItems: '<',
    //                 onRemove: '&'
    //             },
    //             controller: NarrowItDownController,
    //             bindToController: true,
    //             controllerAs: 'items',
    //             templateUrl: 'foundItems.html'
    //     }
    //     return ddo
    // }
    
    MenuAppController.$inject = ['MenuDataService'];
    function MenuAppController(MenuDataService) {
        var list = this;
        list.categories = [];
        list.items = [];

        list.showCategories = function () {
          var promise = MenuDataService.getAllCategories();
          promise.then(function (response) {
            list.categories = response
          })
        .catch(function (err) {
          console.log(err);
        });
        return list.categories
        };

        list.showItems = function (shortName) {
            var promise = MenuDataService.getIetmsForCategory(shortName);
            promise.then(function (response) {
              list.items = response
            })
          .catch(function (err) {
            console.log(err);
          });
          return list.items
          };
    };
    
    })();