'use strict';


angular.module('core').controller('itemController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        // Some example string
        $scope.helloText = 'Item Test';
        $scope.descriptionText = 'It is an application skeleton for a typical MEAN web app. You can use it to quickly bootstrap your project.';
	}
]);
