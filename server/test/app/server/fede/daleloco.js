module.exports=function(req,res,next) {
	//res.send(404,'Aca no hay nada loco');
	console.log('Pase por aca');
//	next(new Error('Uuario no registrado'));
	next();
}