(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['items'];
    function CategoriesController (items) {
        console.log(items)
        var catList = this;
        catList.items = items
    }
})();