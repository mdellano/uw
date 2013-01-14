/*
Servicio exportado con todos las funciones agregadas.
*/
module.exports=require('uw').Service(function(req,res,next) {
	this.nsql(function(db){
		db.collection(req.query['collection'], function(err, collection) {
//            collection.find({_id: req.query['_id']}).toArray(function(err, items) {
//                res.send(items);
//            });
            collection.find(req.query['nsql']).toArray(function(err, items) {
                res.send(items);
            });
	    });
	})
});