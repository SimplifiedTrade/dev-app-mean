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

		  item.created_by: $scope.authentication.user._id
		, item.created_by_name: $scope.authentication.user.displayName
		, item.created_at: $scope.newItem.created_at
		, item.UPC: $scope.newItem.UPC
		, item.Description: $scope.newItem.Description
		, item.Product_Group: $scope.newItem.Product_Group
		, item.Unit_Size: $scope.newItem.Unit_Size
		, item.Unit_Measure: $scope.newItem.Unit_Measure
		, item.Case_Units: $scope.newItem.Case_Units
		, item.Unit_Price_FOB: $scope.newItem.Unit_Price_FOB
		, item.Unit_Price_Delivered: $scope.newItem.Unit_Price_Delivered
		, item.Suggested_Retail_Price: $scope.newItem.Suggested_Retail_Price
		, item.Margin_FOB: $scope.newItem.Margin_FOB
		, item.Margin_Delivered: $scope.newItem.Margin_Delivered
		, item.Shelf_Life_DOM_Days: $scope.newItem.Shelf_Life_DOM_Days
		, item.Shelf_Life_First_REC_Days: $scope.newItem.Shelf_Life_First_REC_Days
		, item.Internal_Reference_Code: $scope.newItem.Internal_Reference_Code
		, item.Internal_Item_Number: $scope.newItem.Internal_Item_Number
		, item.FOB_Case_Price: $scope.newItem.FOB_Case_Price
		, item.Delivered_Case_Price: $scope.newItem.Delivered_Case_Price
		, item.Pallet_Ti_Hi: $scope.newItem.Pallet_Ti_Hi
		, item.Case_Net_Wt_LBS: $scope.newItem.Case_Net_Wt_LBS
		, item.Case_UCC: $scope.newItem.Case_UCC

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
