'use strict'

var drugstoreCtrls = angular.module('drugstoreCtrls',[]);

drugstoreCtrls.controller('ListDSCtrl',['$scope','$http',function($scope,$http){
  console.log("ListDSCtrl");
  $scope.name = 'DrugMan';
  $scope.drugstores = [
    {name: 'Drogasil'},
    {name: 'Pague menos'}
  ];
  $http.get('drugstore',function(data){
  });
}]);

drugstoreCtrls.controller('SingleDSCtrl',['$scope','$http',function($scope,$http){
  console.log("SingleDSCtrl");
}]);
