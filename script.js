(function() {
  var app = angular.module("dbViewer", []);

  var mainController = function($scope) {

    var onError = function(reason) {
      $scope.error = "Tapahtui joku error";
    };

    var testController = function($scope) {
      $scope.message = "Hohoo!";
    };

    $scope.message = "hehoo!";

  };
  
  app.controller("mainController", ["$scope", mainController])

}());
