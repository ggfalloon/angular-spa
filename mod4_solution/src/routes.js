(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/home.template.html'
      })
    
      // categories list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories.template.html',
        controller: 'CategoriesController as categories',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
        
      })
    
      // Items list page
      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/items.template.html',
        controller: 'ItemsController as items',
        resolve: {
            items: ['$stateParams', 'MenuDataService',
                function($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
            }]
        }
      });
    
    }
    
    })();