
'use strict';

var mongoose = require( 'mongoose' );
var Item = mongoose.model('Item');

module.exports = function(router) {

router.route('/items')
	//creates a new item
	.post(function(req, res){

		var item = new Item();

		item.created_by = req.body.created_by;
		item.created_by_name = req.body.created_by_name;
		item.created_at = req.body.created_at;
		item.UPC = req.body.UPC;
		item.Description = req.body.Description;
		item.Product_Group = req.body.Product_Group;
		item.Unit_Size = req.body.Unit_Size;
		item.Unit_Measure = req.body.Unit_Measure;
		item.Case_Units = req.body.Case_Units;
		item.Unit_Price_FOB = req.body.Unit_Price_FOB;
		item.Unit_Price_Delivered = req.body.Unit_Price_Delivered;
		item.Suggested_Retail_Price = req.body.Suggested_Retail_Price;
		item.Margin_FOB = req.body.Margin_FOB;
		item.Margin_Delivered = req.body.Margin_Delivered;
		item.Shelf_Life_DOM_Days = req.body.Shelf_Life_DOM_Days;
		item.Shelf_Life_First_REC_Days = req.body.Shelf_Life_First_REC_Days;
		item.Internal_Reference_Code = req.body.Internal_Reference_Code;
		item.Internal_Item_Number = req.body.Internal_Item_Number;
		item.FOB_Case_Price = req.body.FOB_Case_Price;
		item.Delivered_Case_Price = req.body.Delivered_Case_Price;
		item.Pallet_Ti_Hi = req.body.Pallet_Ti_Hi;
		item.Case_Net_Wt_LBS = req.body.Case_Net_Wt_LBS;
		item.Case_UCC = req.body.Case_UCC;


		item.save(function(err, item) {
			if (err){
				return res.send(500, err);
			}
			return res.json(item);
		});
	})
	//gets all items
	.get(function(req, res){
		console.log('debug1');
		Item.find(function(err, items){
			console.log('debug2');
			if(err){
				return res.send(500, err);
			}
			return res.send(200,items);
		});
	});

//item-specific commands. likely won't be used
router.route('/items/:id')
	//gets specified item
	.get(function(req, res){
		Item.findById(req.params.id, function(err, item){
			if(err)
				res.send(err);
			res.json(item);
		});
	}) 
	//updates specified item
	.put(function(req, res){
		Item.findById(req.params.id, function(err, item){
			if(err)
				res.send(err);

		item.created_by = req.body.created_by;
		item.created_by_name = req.body.created_by_name;
		item.created_at = req.body.created_at;
		item.UPC = req.body.UPC;
		item.Description = req.body.Description;
		item.Product_Group = req.body.Product_Group;
		item.Unit_Size = req.body.Unit_Size;
		item.Unit_Measure = req.body.Unit_Measure;
		item.Case_Units = req.body.Case_Units;
		item.Unit_Price_FOB = req.body.Unit_Price_FOB;
		item.Unit_Price_Delivered = req.body.Unit_Price_Delivered;
		item.Suggested_Retail_Price = req.body.Suggested_Retail_Price;
		item.Margin_FOB = req.body.Margin_FOB;
		item.Margin_Delivered = req.body.Margin_Delivered;
		item.Shelf_Life_DOM_Days = req.body.Shelf_Life_DOM_Days;
		item.Shelf_Life_First_REC_Days = req.body.Shelf_Life_First_REC_Days;
		item.Internal_Reference_Code = req.body.Internal_Reference_Code;
		item.Internal_Item_Number = req.body.Internal_Item_Number;
		item.FOB_Case_Price = req.body.FOB_Case_Price;
		item.Delivered_Case_Price = req.body.Delivered_Case_Price;
		item.Pallet_Ti_Hi = req.body.Pallet_Ti_Hi;
		item.Case_Net_Wt_LBS = req.body.Case_Net_Wt_LBS;
		item.Case_UCC = req.body.Case_UCC;


			item.save(function(err, item){
				if(err)
					res.send(err);

				res.json(item);
			});
		});
	})
	//deletes the item
	.delete(function(req, res) {
		Item.remove({
			_id: req.params.id
		}, function(err) {
			if (err)
				res.send(err);
			res.json("deleted :(");
		});
	});
};
