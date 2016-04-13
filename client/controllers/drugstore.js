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
  ['$scope','$http','$routeParams','$location',
  function($scope,$http,$routeParams, $location){
    var drugstoreId = $routeParams.id;
    console.log("SingleDSCtrl. id = "+drugstoreId);

    $scope.fetchDrugstore = function(){
      $http.get('/drugstore/'+drugstoreId).then(function(response){
        console.log('Drugstore fetched from server');
        console.log(response.data);
        $scope.drugstore = response.data[0];
      });
    }

    $scope.updateDrugstore = function(drugstore){
      var drugstoreId = drugstore._id,
          drugstoreNewName = $scope.name;
      console.log("Update drugstore");
      if (drugstoreNewName != drugstore.name &&
          (drugstoreNewName != "" || drugstoreNewName != undefined)) {
        $http.put('/drugstore',{_id: drugstoreId, name: drugstoreNewName}).success(function(data,status){
          console.log(data.message);
          $scope.drugstore.name = drugstoreNewName;
        });
      }
    }

    $scope.deleteDrugstore = function(drugstore){
      var drugstoreId = drugstore._id,
          deleteUrl = 'drugstore/'+drugstoreId;
      console.log('Delete drugstore '+drugstore.name);
      $http.delete(deleteUrl).then(function(response){
        console.log(response.message);
        $location.path('/');
      });
    }

    $scope.fetchDrugsFromDrugstore = function(){
      var drugstoreDrugsUrl = '/drugstore/'+drugstoreId+'/drug';
      $http.get(drugstoreDrugsUrl).then(function(response){
        console.log('Drugs from drugstore '+$scope.drugstore.name+' fetched');
        console.log(response.data);
        $scope.drugstoreDrugs = response.data;
      });
    }

}]);
