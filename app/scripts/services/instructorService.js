'use strict';

angular.module('fwAerial')
    .factory('instructorService', ['$http', '$q', instructorService]);

function instructorService($http, $q) {
    var self = {};
    var _serviceUri = getServiceUri();
    self.getInstructorList = getInstructorList;

    return self;

    function getInstructorList() {
        return $q.resolve({ data: getTemporaryInstructors() })
    }


    function _get(url) { return $http.get(url); };
    function _post(url, data) { return $http.post(url, data); };
    function _put(url, data) { return $http.put(url, data); };
    function _delete(url) { return $http.delete(url); };


    function getServiceUri() {
    }

    function getTemporaryInstructors() {
        return [
            { name: "Danielle Violet Carroll", bio: "danielles bio here", picture: "/app/images/image3.jpg"},
            { name: "Karri Duhaime", bio: "karris bio here", picture: "/app/images/image3.jpg"},
            { name: "Ernesto Lea Place", bio: "ernestos bio here", picture: "/app/images/image3.jpg"},
            { name: "Julia Martinez", bio: "julias bio here", picture: "/app/images/image3.jpg"},
            { name: "Caitlyn Quinn", bio: "caitlyns bio here", picture: "/app/images/image3.jpg"},
            { name: "Katie Rocco", bio: "katies bio here", picture: "/app/images/image3.jpg"}
        ];
    }
}
