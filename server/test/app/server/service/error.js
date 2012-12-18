var error=function(err,req,res,next) {
	console.dir(err);
	res.send(501,'todo mal');
};

module.exports=error;