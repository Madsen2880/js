/**
 * Created by 57130 on 23-11-2016.
 */
/*globals angular*/

var app = angular.module('myApp', ['ui.router']);

app.controller('myCtrl', function($scope, $http){
    "use strict";
   $http.get("./Assets/JS/model.json")
       .then(function (response) {
          $scope.names = response.data;
       });
});



var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    "use strict";

    $urlRouterProvider.otherwise('/forside');

    $stateProvider

        .state('forside', {
            url: '/forside',
            templateUrl: './assets/views/partial-forside.html'
        })

        .state('kontakt', {
            url: '/kontakt',
            templateUrl: './assets/views/partial-kontakt.html'
        });

});

app.controller("forside", function ($scope) {
    "use strict";
    $http.get("./Assets/JS/model.json")
        .then(function (response){
           $scope.page = response;
        });
});