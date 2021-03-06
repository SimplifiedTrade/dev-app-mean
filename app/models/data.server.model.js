var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new mongoose.Schema({
	created_by: { type: Schema.ObjectId, ref: 'User' },
	created_by_name: String,
	created_at: {type: Date, default: Date.now},
	UPC: String,
	Description: String,
	Product_Group: String,
	Unit_Size: String, 
	Unit_Measure: String,
	Case_Units: String,
	Unit_Price_FOB: String,
	Unit_Price_Delivered: String,
	Suggested_Retail_Price: String,
	Margin_FOB: String,
	Margin_Delivered: String,
	Shelf_Life_DOM_Days: String,
	Shelf_Life_First_REC_Days: String,
	Internal_Reference_Code: String,
	Internal_Item_Number: String,
	FOB_Case_Price: String,
	Delivered_Case_Price: String,
	Pallet_Ti_Hi: String,
	Case_Net_Wt_LBS: String,
	Case_UCC: String
});

var promoSchema = new mongoose.Schema({
	created_by: { type: Schema.ObjectId, ref: 'User' },
	created_by_name: String,
	created_at: {type: Date, default: Date.now},	
	updated_at: {type: Date, default: Date.now},	
	Deal_ID: String,
	Deal_Type: String,
	Account: String,
	Product_Group: String,
	Feature: Boolean,
	Display_Level: [Number],
	Normal_Retail: [Number],
	Promo_Price: [Number],
	Allowance_Type: String,
	Allowance_Amount: [Number],
	Retailer_Margin: [Number],
	Start_Date: Date,
	End_Date: Date,
	Allocation: Boolean,
	Allocation_Quantity: [Number],
	Allocation_UOM: String,
	Forecast_Units: [Number],
	ROI: [Number],
	Notes: String

});

mongoose.model('Item', itemSchema);
mongoose.model('Promo', promoSchema);
