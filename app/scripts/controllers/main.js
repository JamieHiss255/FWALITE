'use strict';

angular.module('fwAerial')
  .controller('HomeController', ['$window', HomeController]);

function HomeController($window) {
  var vm = this;
  var iTunesLink = "https://www.mindbodyonline.com/get-the-app"; //"https://itunes.apple.com/us/app/mindbody-book-fitness-classes-yoga-and-wellness/id689501356?mt=8"; 
  var googlePlayLink = "https://play.google.com/store/apps/details?id=com.mindbodyonline.connect&hl=en"; 

  vm.navigateToMindBody = navigateToMindBody;
  vm.goToAppStore = goToAppStore; 

  function navigateToMindBody() {
    $window.open("https://clients.mindbodyonline.com/classic/mainclass?studioid=854204", "_blank");
  }

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }

  };

  function goToAppStore() {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i))
      return $window.open(iTunesLink);
    return $window.open(googlePlayLink);
  }

};
