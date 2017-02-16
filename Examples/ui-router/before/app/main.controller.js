(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = [];

    /* @ngInject */
    function MainController() {
        var vm = this;
        vm.title = 'MainController';
        vm.goSomewhere = goSomewhere;

        activate();

        function activate() {

            vm.test = 'foo';

        }

        function goSomewhere() {
            // handle updating our state
        }
    }
})();
