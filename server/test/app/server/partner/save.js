/*
Servicio exportado con todos las funciones agregadas.
*/
module.exports=require('uw').Service(function(req,res,next) {

	this.nsql(function(db){
		db.collection('test', function(err, collection) {
            var model = req.query['model'];
            var m = eval ('('+model+')');
            collection.save(m);
	    });
	})
});