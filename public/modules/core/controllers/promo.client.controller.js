'use strict';

angular.module('core').controller('promoController', ['$scope', 'Authentication', 'promoService',
	function($scope, Authentication, promoService) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	
	// Some example string - remove in prod
        $scope.helloText = 'Promo form Test';
        $scope.testuser = $scope.authentication.user.displayName;


    	$scope.promos = promoService.query();
		$scope.newPromo = {};


	$scope.post = function() {
	  promoService.save({
	  	  created_by: $scope.authentication.user._id
	  	, created_by_name: $scope.authentication.user.displayName
	  	, newPromo.Account: $scope.Account
	  	, newPromo.Deal_Type: $scope.Deal_Type
	  	, newPromo.Deal_ID: $scope.Deal_ID

	  	}, function(){
	    $scope.promos = promoService.query();
	    $scope.newPromo = {};
	  });
	};
	
	$scope.delete = function(promo)	{
		promoService.delete({id: promo._id});
		$scope.promo = promoService.query();
	};

	}
]);
