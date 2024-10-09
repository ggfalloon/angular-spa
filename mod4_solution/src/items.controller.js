(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    // ItemsController.$inject = ['$stateParams','items'];
    // ItemsController.$inject = ['items'];
    function ItemsController () {
        var itemsList = this;
        itemsList.items = items
    }

})();