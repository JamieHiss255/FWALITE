'use strict';

angular.module('fwAerial')
    .controller('AboutController', ['$scope', '$q', 'instructorService', aboutController]);

function aboutController($scope, $q, instructorService) {
    var vm = this;
    vm.instructors = [];

    loadInstructorList();

    function loadInstructorList() {
        instructorService.getInstructorList().then(function (result) {
            vm.instructors = result.data;
        })
    }
}
