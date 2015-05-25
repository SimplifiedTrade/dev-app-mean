'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        // Some example string
        $scope.helloText = 'Simplified Trade Application V0.1';
        $scope.descriptionText = 'Lorem Ipsum - Page will be replaced';
	}
]);
