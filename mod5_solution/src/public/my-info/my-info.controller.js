(function () {
    'use strict';

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['myinfo'];
    function MyInfoController(myinfo) {
        console.log(myinfo)
        var $ctrl = this;
        $ctrl.myinfo = myinfo[0];
        console.log($ctrl.myinfo)
    }

})();