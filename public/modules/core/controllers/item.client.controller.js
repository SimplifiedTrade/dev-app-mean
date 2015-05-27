'use strict';

angular.module('core').controller('itemController', ['$scope', 'Authentication', 'itemService',
	function($scope, Authentication, itemService) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	
	// Some example string - remove in prod
        $scope.helloText = 'Item Test';
        $scope.testuser = $scope.authentication.user.displayName;


    	$scope.items = itemService.query();
		$scope.newItem = {created_by: '', UPC: '', created_at: ''};;

	$scope.post = function() {
		itemService.save({created_by: $scope.authentication.user.displayName, UPC: $scope.newItem, created_at: Date.now()}, 
		function(){
			$scope.items = itemService.query();
			$scope.newItem = {created_by: '', UPC: '', created_at: ''};;	
		});
	};
	$scope.delete = function(item)	{
		itemService.delete({id: item._id});
		$scope.item = itemService.query();
	};

	}
]);
