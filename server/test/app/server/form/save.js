/*
Servicio exportado con todos las funciones agregadas.
*/
module.exports=require('uw').Service(function(req,res,next) {
	this.nsql(function(db){
		db.collection(req.query['collection'], function(err, collection) {
//            if ( eval(req.query.insert) ) {
//                collection.save(req.query['model']);
//            } else {
//                collection.update(
//                    {"_id": ObjectId(req.query["_id"]) },
//                    req.query['model']);
//            }

            collection.save(req.query['model']);
            res.send(req.query['model']);
	    });
	})
});