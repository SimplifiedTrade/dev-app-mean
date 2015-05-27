route.js
var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Item = mongoose.model('Item');



router.route('/items')
	//creates a new item
	.post(function(req, res){

		var item = new Item();
		item.text = req.body.text;
		item.created_by = 'tester';
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

			item.created_by = 'tester';
			item.text = req.body.text;

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

module.exports = router;
