(function() {
    var app = angular.module("dbViewer", []);

    var MainController = function($scope, $http, $interval, $log) {
      var onUserComplete = function(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
          .then(onRepos, onError);
      };

      var onRepos = function(response) {
        $scope.repos = response.data;
      };


      var onError = function(reason) {
        $scope.error = "Could not fetch the data.";
      };

      var decrementCountDown = function() {
        $scope.countDown -= 1;
        if ($scope.countDown < 1) {
          $scope.search($scope.username);
        }
      };

      var startCountDown = function() {
        $interval(decrementCountDown, 1000, $scope.countDown);
      
    };

    $scope.search = function(username) {
      $log.info("Searching for.. " + username);
      $http.get("http://www.omdbapi.com/?s=" + username)
        .then(onUserComplete, onError);
    };

    $scope.username = "angular";
    $scope.message = "omdbapi viewer";
    $scope.countDown = 5;
  };

  app.controller("MainController", MainController);
}());
