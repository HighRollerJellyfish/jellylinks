app.controller('RespondToPollCtrl', ['$scope', '$rootScope', 'ForumsFactory', '$stateParams', function($scope, $rootScope, ForumsFactory, $stateParams) {
  $scope.poll = ForumsFactory.getPolls($stateParams.forumKey);

}]);



