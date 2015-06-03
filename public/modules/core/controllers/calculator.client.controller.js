'use strict';

  angular.module('core').controller('calculatorController', ['$scope', 'Authentication', 
	 function($scope, Authentication ) {
      $scope.master = {};

      $scope.reset = function() {
        $scope.margin = {};
      };

      $scope.reset();
      
        }]);
