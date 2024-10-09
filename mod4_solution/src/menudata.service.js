(function () { 

    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com")

    
    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function () {
        var categories = []

    var response = $http({
        method: "GET",
        url: (ApiBasePath + '/categories.json')
    })
    // .then(function (result) {
    //   var catItems = Object.values(result.data)
    //   categories.push(...catItems)
    //   return categories
    //  });
     return response
    }

    service.getItemsForCategory = function (categoryShortName) {
        var items = []

        var response = $http({
            method: "GET",
            url: (ApiBasePath + '/menu_items.json'),
            params: {
                category: categoryShortName
            }
        }).then(function (result) {
          var processedItems = Object.values(result.data)
    
          processedItems.forEach(pi => {
            var menuItems = pi.menu_items
            items.push(...menuItems)
          })
          return items
         });
         return response
        }
  };
})();