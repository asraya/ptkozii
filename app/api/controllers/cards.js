const cardModel = require('../models/cards');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		cardModel.findById(req.params.cardId, function(err, cardInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "card found!!!", data:{cards: cardInfo}});
			}
		});
	},

	getAll: function(res, next) {
		let cardsList = [];

		cardModel.find({}, function(err, cards){
			if (err){
				next(err);
			} else{
				for (let card of cards) {
					cardsList.push({id: card._id, name: card.name, released_on: card.released_on});
				}
				res.json({status:"success", message: "cards list found!!!", data:{cards: cardsList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		cardModel.findByIdAndUpdate(req.params.cardId,{name:req.body.name}, function(err, cardInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "card updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		cardModel.findByIdAndRemove(req.params.cardId, function(err, cardInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "card deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		cardModel.create({
			cardNumber: req.body.cardNumber, 
			cvv: req.body.cvv,
			cardName: req.body.cardName,
			username: req.body.username, 
			cardType: req.body.cardType, 
			cardExpDate: req.body.cardExpDate
		},
			 function (err) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "card added successfully!!!", data: null});
				  
				});
	},

}			