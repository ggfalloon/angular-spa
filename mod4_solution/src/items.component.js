(function () {
    'use strict';
    
    angular.module('Menu App')
    .component('items', {
      templateUrl: 'src/templates/items.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();