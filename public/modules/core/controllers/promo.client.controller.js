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
		, Deal_Type: $scope.newPromo.Deal_Type
		, Account: $scope.newPromo.Account
		, Product_Group: $scope.newPromo.Product_Group
		, Feature: $scope.newPromo.Feature
		, Display_Level: $scope.newPromo.Display_Level
		, Normal_Retail: $scope.newPromo.Normal_Retail
		, Promo_Price: $scope.newPromo.Promo_Price
		, Allowance_Type: $scope.newPromo.Allowance_Type
		, Allowance_Amount: $scope.newPromo.Allowance_Amount
		, Retailer_Margin: $scope.newPromo.Retailer_Margin
		, Start_Date: $scope.newPromo.Start_Date
		, End_Date: $scope.newPromo.End_Date
		, Allocation: $scope.newPromo.Allocation
		, Allocation_Quantity: $scope.newPromo.Allocation_Quantity
		, Allocation_UOM: $scope.newPromo.Allocation_UOM
		, Forecast_Units: $scope.newPromo.Forecast_Units
		, ROI: $scope.newPromo.ROI
		, Notes: $scope.newPromo.Notes

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
