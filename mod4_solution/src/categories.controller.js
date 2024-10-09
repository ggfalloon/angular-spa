(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

    // CategoriesController.$inject = ['$stateParams'];
    function CategoriesController () {
        var catList = this;
        console.log(catList)
        // catList.items.short_name = $stateParams.categoryShortName
        // catList.items = items
        return catList
    }

})();