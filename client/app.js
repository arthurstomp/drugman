'use strict'

var drugmanApp = angular.module('Drugman',['ngRoute', 'drugstoreCtrls']);

drugmanApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'views/drugstore/list.html',
    controller: 'ListDSCtrl',
  }).
  when('/drug',{
    templateUrl: 'views/drug/list.html',
    controller: 'ListDrugCtrl',
  }).
  otherwise({
    redirectTo: '/',
  });
}]);
