(function () { 

    angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");

    
    MenuDataService.$inject = ['$http', 'ApiBasePath'];
        function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + '/categories.json')
            })
            .then(function (result) {
                return result.data
            });
            return response
        }

        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + '/menu_items/' + categoryShortName + '.json'),
            }).then(function (result) {
                var processedItems = result.data.menu_items
                return processedItems
            });
            return response
        }
    };
})();