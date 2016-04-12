'use strict'

var drugstoreCtrls = angular.module('drugstoreCtrls',[]);

drugstoreCtrls.controller('ListDSCtrl',
  ['$scope','$http','$location',
  function($scope,$http,$location){
    console.log("ListDSCtrl");

    $scope.fetchDrugstores = function(){
      $http.get('drugstore').then(function(response){
        console.log("Drugstore fetched form server");
        console.log(response.data);
        $scope.drugstores = response.data;
      });
    }

    $scope.createNewDrugstore = function(){
      var newDrugstoreName = $scope.name,
          postData = {name: newDrugstoreName};
      console.log('Create new drugstore');
      $http.post('drugstore',postData).success(function(data,status){
        console.log(data.message);
        $scope.fetchDrugstores();
        var newDrugstoreInputName = angular.element(document.querySelector('#new-drugstore-input-name'));
        newDrugstoreInputName.context.value = "";
      });
    }

    $scope.gotoDrugstore = function(drugstore){
      var drugstoreId = drugstore._id,
          url = 'drugstore/'+drugstoreId;
      $location.path(url);
    }
}]);

drugstoreCtrls.controller('SingleDSCtrl',
  ['$scope','$http','$routeParams',
  function($scope,$http,$routeParams){
    var drugstoreId = $routeParams.id;
    console.log("SingleDSCtrl. id = "+drugstoreId);

    $scope.fetchDrugstore = function(){
      $http.get('/drugstore/'+drugstoreId).then(function(response){
        console.log('Drugstore fetched from server');
        console.log(response.data);
        $scope.drugstore = response.data[0];
      });
    }

    $scope.fetchDrugsFromDrugstore = function(){
      var drugstoreDrugsUrl = '/drugstore/'+drugstoreId+'/drug',
          drugstoreDrugs;
      // Need to create a route that returns the drugstore-drugs completed with
      // drugs info.
      $http.get(drugstoreDrugsUrl).then(function(response){
        console.log('Drugs from drugstore '+$scope.drugstore.name+' fetched');
        console.log(response.data);
        drugstoreDrugs = response.data;
        var drugsUrl = '/drug'
        $http.get(url)
      });
    }

}]);
