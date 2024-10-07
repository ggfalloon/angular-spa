(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json");;

    function FoundItemsDirective (){
        var ddo = {
                scope: {
                    foundItems: '<',
                    onRemove: '&'
                },
                controller: NarrowItDownController,
                bindToController: true,
                controllerAs: 'items',
                templateUrl: 'foundItems.html'
        }
        return ddo
    }
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var list = this;
        list.items = []

        list.showMenuItems = function (search) {
          var promise = MenuSearchService.getMatchedMenuItems(search);
          promise.then(function (response) {
          console.log(response)
          list.items = response
        })
        .catch(function (err) {
          console.log(err);
          list.items = []
        });
        };

        list.removeItem = function (index) {
          var updatedList = MenuSearchService.removeItem(index);
          list.items = updatedList
        }

    }
    
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
      var service = this;

      service.getMatchedMenuItems = function (searchTerm) {
        var foundItems = []
        var filteredItems = []

        var response = $http({
            method: "GET",
            url: ApiBasePath,
        }).then(function (result) {
          var processedItems = Object.values(result.data)

          processedItems.forEach(pi => {
            var menuItems = pi.menu_items
            filteredItems.push(...menuItems)
          })
          // process result and only keep items that match
          for (var i = 0; i < filteredItems.length; i++) {
            var description = filteredItems[i].description;
            if (description.toLowerCase().indexOf(searchTerm) !== -1) {
              var item = {
                name: filteredItems[i].name,
                shortName: filteredItems[i].short_name,
                description: filteredItems[i].description
                };
              foundItems.push(item)
            }
          }
          return foundItems
         });
         return response
      };

      service.removeItem = function (itemIndex) {
        foundItems.splice(itemIndex, 1);
      };

    }
    })();