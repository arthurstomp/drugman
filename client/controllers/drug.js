var drugCtrl = angular.module('drugCtrl',[]);

drugCtrl.controller('ListDrugCtrl',
  ['$scope','$http',
  function($scope,$http){
    console.log("ListDrugCtrl");

    $scope.fetchDrugs = function(){
      $http.get('drug').then(function(response){
        console.log('Drugs fetched from server');
        console.log(response.data);
        $scope.drugs = response.data;
      });
    }

    $scope.createNewDrug = function(){
      var newDrugName = $scope.name,
          postData = {name: newDrugName};
      console.log('create new drug!');
      $http.post('drug',postData).success(function(data,status){
        console.log(data.message);
        $scope.fetchDrugs();
        var newDrugInputName = angular.element(document.querySelector('#new-drug-input-name'));
        newDrugInputName.context.value = "";
      });
    }

    $scope.deleteDrug = function(drug){
      var drugId = drug._id,
          deleteUrl = "drug/"+drugId;
      console.log('Delete drug');
      $http.delete(deleteUrl).then(function(response){
        console.log(response.message);
        $scope.fetchDrugs();
      });
    }
}]);

drugCtrl.controller('SingleDrugCtrl',
  ['$scope','$http', '$routeParams',
  function($scope,$http,$routeParams){
    var drugId = $routeParams.id;
    console.log('SingleDrugCtrl');
    $http.get('drug/'+drugId).then(function(response){
      console.log('Drug fetched from server');
      console.log(response.data);
      $scope.drug = respose.data[0];
    });
}]);
