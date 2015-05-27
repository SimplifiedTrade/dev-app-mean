'use strict';

angular.module('core').controller('itemController', ['$scope', 'Authentication', 'itemService',
	function($scope, Authentication, itemService) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	
	// Some example string - remove in prod
        $scope.helloText = 'Item Test';
        $scope.testuser = $scope.authentication.user.displayName;


    	$scope.items = itemService.query();
		$scope.newItem = '';

	$scope.post = function() {
		$scope.items.push({created_by: $scope.authentication.user.displayName, UPC: $scope.newItem, created_at: Date.now()}, 
		function(){
			$scope.items = itemService.query();
			$scope.newItem = '';	
		});
	};
	$scope.delete = function(item)	{
		itemService.delete({id: item._id});
		$scope.item = itemService.query();
	};

	}
]);
