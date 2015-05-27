var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new mongoose.Schema({
	created_by: { type: Schema.ObjectId, ref: 'User' },
	created_at: {type: Date, default: Date.now},
	UPC: String,
	Unit_Size: String, 
	Unit_Measure: String,
	Case_Units: String,
	Unit_Price_FOB: String,
	Unit_Price_Delivered: String,
	Suggested_Retail_Price: String,
	Margin_FOB: String,
	Margin_Delivered: String
});


mongoose.model('Item', itemSchema);
