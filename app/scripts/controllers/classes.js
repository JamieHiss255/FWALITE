    'use strict';

    angular.module('fwAerial')
      .controller('ClassesController', ['$scope', '$q', 'classService', '$window', classesController]);

    function classesController($scope, $q, classService, $window) {
        var vm = this; 
        vm.classes = [];
        vm.navigateToMindBody = navigateToMindBody;  

        loadClassList();

        function loadClassList() {
            classService.getClassList().then(function (result) {
                vm.classes = result.data; 
            })
        }

        function navigateToMindBody(){
           $window.open("https://clients.mindbodyonline.com/classic/mainclass?studioid=854204", "_blank"); 
        }
    };

