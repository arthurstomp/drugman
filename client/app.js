'use strict'

var drugmanApp = angular.module('Drugman',['ngRoute', 'drugstoreCtrls', 'drugCtrl']);

drugmanApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    redirectTo: '/drugstore',
  }).
  when('/drugstore',{
    templateUrl: 'views/drugstore/list.html',
    controller: 'ListDSCtrl',
  }).
  when('/drugstore/:id',{
    templateUrl: 'views/drugstore/single.html',
    controller: 'SingleDSCtrl',
  }).
  when('/drug',{
    templateUrl: 'views/drug/list.html',
    controller: 'ListDrugCtrl',
  }).
  when('/drug/:id',{
    templateUrl: 'views/drug/single.html',
    controller: 'SingleDrugCtrl',
  }).
  otherwise({
    redirectTo: '/drugstore',
  });
}]);
