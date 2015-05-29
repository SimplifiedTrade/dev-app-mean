
'use strict';

var mongoose = require( 'mongoose' );
var Promo = mongoose.model('Promo');

module.exports = function(router) {

router.route('/promos')
	//creates a new promo
	.post(function(req, res){

		var promo = new Promo();
		promo.created_by = req.body.created_by;
		promo.created_by_name = req.body.created_by_name;
		promo.created_at = req.body.created_at;
		promo.updated_at = req.body.updated_at;
		promo.Deal_ID = req.body.Deal_ID;
		promo.Deal_Type = req.body.Deal_Type;
		promo.Account = req.body.Account;
		promo.Product_Group = req.body.Product_Group;
		promo.Feature = req.body.Feature;
		promo.Display_Level = req.body.Display_Level;
		promo.Normal_Retail = req.body.Normal_Retail;
		promo.Promo_Price = req.body.Promo_Price;
		promo.Allowance_Type = req.body.Allowance_Type;
		promo.Allowance_Amount = req.body.Allowance_Amount;
		promo.Retailer_Margin = req.body.Retailer_Margin;
		promo.Start_Date = req.body.Start_Date;
		promo.End_Date = req.body.End_Date;
		promo.Allocation = req.body.Allocation;
		promo.Allocation_Quantity = req.body.Allocation_Quantity;
		promo.Allocation_UOM = req.body.Allocation_UOM;
		promo.Forecast_Units = req.body.Forecast_Units;
		promo.ROI = req.body.ROI;
		promo.Notes = req.body.Notes;

		promo.save(function(err, promo) {
			if (err){
				return res.send(500, err);
			}
			return res.json(promo);
		});
	})
	//gets all promos
	.get(function(req, res){
		console.log('debug1');
		Promo.find(function(err, promos){
			console.log('debug2');
			if(err){
				return res.send(500, err);
			}
			return res.send(200,promos);
		});
	});

//promo-specific commands. likely won't be used
router.route('/promos/:id')
	//gets specified promo
	.get(function(req, res){
		Promo.findById(req.params.id, function(err, promo){
			if(err)
				res.send(err);
			res.json(promo);
		});
	}) 
	//updates specified promo
	.put(function(req, res){
		Promo.findById(req.params.id, function(err, promo){
			if(err)
				res.send(err);

			promo.created_by = req.body.created_by;
			promo.created_by_name = req.body.created_by_name;
			promo.created_at = req.body.created_at;
			promo.updated_at = req.body.updated_at;
			promo.Deal_ID = req.body.Deal_ID;
			promo.Deal_Type = req.body.Deal_Type;
			promo.Account = req.body.Account;
			promo.Product_Group = req.body.Product_Group;
			promo.Feature = req.body.Feature;
			promo.Display_Level = req.body.Display_Level;
			promo.Normal_Retail = req.body.Normal_Retail;
			promo.Promo_Price = req.body.Promo_Price;
			promo.Allowance_Type = req.body.Allowance_Type;
			promo.Allowance_Amount = req.body.Allowance_Amount;
			promo.Retailer_Margin = req.body.Retailer_Margin;
			promo.Start_Date = req.body.Start_Date;
			promo.End_Date = req.body.End_Date;
			promo.Allocation = req.body.Allocation;
			promo.Allocation_Quantity = req.body.Allocation_Quantity;
			promo.Allocation_UOM = req.body.Allocation_UOM;
			promo.Forecast_Units = req.body.Forecast_Units;
			promo.ROI = req.body.ROI;
			promo.Notes = req.body.Notes;

			promo.save(function(err, promo){
				if(err)
					res.send(err);

				res.json(promo);
			});
		});
	})
	//deletes the promo
	.delete(function(req, res) {
		Promo.remove({
			_id: req.params.id
		}, function(err) {
			if (err)
				res.send(err);
			res.json("deleted :(");
		});
	});
};
