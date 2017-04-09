    'use strict';

    angular.module('fwAerial')
      .controller('ClassesController', ['$scope', '$q', 'classService', classesController]);

    function classesController($scope, $q, classService) {
        var vm = this; 
        vm.classes = [];

        loadClassList();

        function loadClassList() {
            classService.getClassList().then(function (result) {
                vm.classes = result.data; 
            })
        }
    };

