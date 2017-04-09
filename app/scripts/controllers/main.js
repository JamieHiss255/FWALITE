'use strict';

angular.module('fwAerial')
      .controller('HomeController', ['$window', HomeController]);

    function HomeController($window){
    var vm = this; 
    vm.navigateToMindBody = navigateToMindBody; 

  function navigateToMindBody(){
           $window.open("https://clients.mindbodyonline.com/classic/mainclass?studioid=854204", "_blank"); 
        }
  };
