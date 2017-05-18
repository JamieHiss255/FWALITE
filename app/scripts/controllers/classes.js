'use strict';

angular.module('fwAerial')
    .controller('ClassesController', ['$scope', '$q', 'classService', '$window', classesController]);

function classesController($scope, $q, classService, $window) {
    var vm = this;
    vm.classes = [];
    vm.navigateToMindBody = navigateToMindBody;
    vm.goToAppStore = goToAppStore;

    var iTunesLink = "https://www.mindbodyonline.com/get-the-app"; //"https://itunes.apple.com/us/app/mindbody-book-fitness-classes-yoga-and-wellness/id689501356?mt=8"; 
    var googlePlayLink = "https://play.google.com/store/apps/details?id=com.mindbodyonline.connect&hl=en";

    loadClassList();

    function loadClassList() {
        classService.getClassList().then(function (result) {
            vm.classes = result.data;
        })
    }

    function navigateToMindBody() {
        $window.open("https://clients.mindbodyonline.com/classic/mainclass?studioid=854204", "_blank");
    }

    function goToAppStore() {
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i))
            return $window.open(iTunesLink);
        return $window.open(googlePlayLink);
    }
};

