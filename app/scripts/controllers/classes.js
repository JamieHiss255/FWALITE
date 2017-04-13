'use strict';

angular.module('fwAerial')
    .controller('ClassesController', ['$scope', '$q', 'classService', '$window', classesController]);

function classesController($scope, $q, classService, $window) {
    var vm = this;
    vm.classes = [];
    vm.navigateToMindBody = navigateToMindBody;
    var itunesLink = "https://itunes.apple.com/us/app/mindbody-book-fitness-classes-yoga-and-wellness/id689501356?mt=8";
    var googlePlayLink = "https://play.google.com/store/apps/details?id=com.mindbodyonline.connect&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";

    loadClassList();

    function loadClassList() {
        classService.getClassList().then(function (result) {
            vm.classes = result.data;
        })
    }

    function goToMindBodyApp() {
        if (getMobileOperatingsystem() == "iOS")
            return itunesLink;
        return googlePlayLink;
    }

    function navigateToMindBody() {
        $window.open("https://clients.mindbodyonline.com/classic/mainclass?studioid=854204", "_blank");
    }

    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }

        return "unknown";
    }
};

