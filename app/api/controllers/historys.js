const historyModel = require('../models/historys');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		historyModel.findById(req.params.historyId, function(err, historyInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "history found!!!", data:{historys: historyInfo}});
			}
		});
	},

	getAll: function(res, next) {
		let historysList = [];

		historyModel.find({}, function(err, historys){
			if (err){
				next(err);
			} else{
				for (let history of historys) {
					historysList.push({id: history._id, name: history.name, released_on: history.released_on});
				}
				res.json({status:"success", message: "historys list found!!!", data:{historys: historysList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		historyModel.findByIdAndUpdate(req.params.historyId,{name:req.body.name}, function(err, historyInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "history updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		historyModel.findByIdAndRemove(req.params.historyId, function(err, historyInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "history deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		historyModel.create({
			userID: req.body.userID, 
			id: req.body.id,
			cardID: req.body.cardID,
			merchant: req.body.merchant, 
			success: req.body.success, 
			createdDate: req.body.createdDate		
		},
			 function (err) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "history added successfully!!!", data: null});
				  
				});
	},

}			