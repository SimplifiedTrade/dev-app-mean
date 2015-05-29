'use strict';

angular.module('core').controller('itemController', ['$scope', '$window' ,'Authentication', 'itemService',
	function($scope, $window, Authentication, itemService) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	
	// Some example string - remove in prod
        $scope.helloText = 'Item Test';
        $scope.testuser = $scope.authentication.user.displayName;


    	$scope.items = itemService.query();
		$scope.newItem = {};
	


	$scope.post = function() {
	  itemService.save({

		  created_by: $scope.authentication.user._id
		, created_by_name: $scope.authentication.user.displayName
		, created_at: $scope.newItem.created_at
		, UPC: $scope.newItem.UPC
		, Description: $scope.newItem.Description
		, Product_Group: $scope.newItem.Product_Group
		, Unit_Size: $scope.newItem.Unit_Size
		, Unit_Measure: $scope.newItem.Unit_Measure
		, Case_Units: $scope.newItem.Case_Units
		, Unit_Price_FOB: $scope.newItem.Unit_Price_FOB
		, Unit_Price_Delivered: $scope.newItem.Unit_Price_Delivered
		, Suggested_Retail_Price: $scope.newItem.Suggested_Retail_Price
		, Margin_FOB: $scope.newItem.Margin_FOB
		, Margin_Delivered: $scope.newItem.Margin_Delivered
		, Shelf_Life_DOM_Days: $scope.newItem.Shelf_Life_DOM_Days
		, Shelf_Life_First_REC_Days: $scope.newItem.Shelf_Life_First_REC_Days
		, Internal_Reference_Code: $scope.newItem.Internal_Reference_Code
		, Internal_Item_Number: $scope.newItem.Internal_Item_Number
		, FOB_Case_Price: $scope.newItem.FOB_Case_Price
		, Delivered_Case_Price: $scope.newItem.Delivered_Case_Price
		, Pallet_Ti_Hi: $scope.newItem.Pallet_Ti_Hi
		, Case_Net_Wt_LBS: $scope.newItem.Case_Net_Wt_LBS
		, Case_UCC: $scope.newItem.Case_UCC


	  }, function(){
	    $scope.items = itemService.query();
	    $scope.newItem = {};
	    $window.location.href = '/#!/item-form';
	  });
	};
	
	$scope.delete = function(item)	{
		itemService.delete({id: item._id});
		$scope.item = itemService.query();
	};

	}
]);
