'use strict';

angular.module('core').controller('emailController', ['$scope', '$window' ,'Authentication', 'emailService',
	function($scope, $window, Authentication, emailService) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	
	// Some example string - remove in prod
        $scope.helloText = 'Email Test';
        $scope.testuser = $scope.authentication.user.displayName;
        
        $scope.sortType     = 'name'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchDescription   = '';     // set the default search/filter term


    	$scope.emails = emailService.query();

	
	
	$scope.delete = function(email)	{
		emailService.delete({id: email._id});
		$scope.email = emailService.query();
	};

	}
]);
