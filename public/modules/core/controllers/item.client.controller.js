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
	  	  item.created_by = req.body.created_by
		, item.created_by_name = req.body.created_by_name
		, item.UPC = req.body.UPC
		, item.Description = req.body.Description
		, item.Product_Group = req.body.Product_Group
		, item.Unit_Size = req.body.Unit_Size
		, item.Unit_Measure = req.body.Unit_Measure
		, item.Case_Units = req.body.Case_Units
		, item.Unit_Price_FOB = req.body.Unit_Price_FOB
		, item.Unit_Price_Delivered = req.body.Unit_Price_Delivered
		, item.Suggested_Retail_Price = req.body.Suggested_Retail_Price
		, item.Margin_FOB = req.body.Margin_FOB
		, item.Margin_Delivered = req.body.Margin_Delivered
		, item.Shelf_Life_DOM_Days = req.body.Shelf_Life_DOM_Days
		, item.Shelf_Life_First_REC_Days = req.body.Shelf_Life_First_REC_Days
		, item.Internal_Reference_Code = req.body.Internal_Reference_Code
		, item.Internal_Item_Number = req.body.Internal_Item_Number
		, item.FOB_Case_Price = req.body.FOB_Case_Price
		, item.Delivered_Case_Price = req.body.Delivered_Case_Price
		, item.Pallet_Ti_Hi = req.body.Pallet_Ti_Hi
		, item.Case_Net_Wt_LBS = req.body.Case_Net_Wt_LBS
		, item.Case_UCC = req.body.Case_UCC

	  	
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
