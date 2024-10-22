(function () {
    'use strict';

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['myinfo'];
    function MyInfoController(myinfo) {
        var $ctrl = this;
        $ctrl.myinfo = myinfo;
        console.log($ctrl.myinfo)

    }

})();