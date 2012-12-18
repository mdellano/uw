var config={};
//Application path
config.path = './app';
//Services
config.get = {
	"/service":{
		services:['/service/get']
	},
	"/fede": {
		services:['/fede/daleloco.js','/service/get']
	}
};
config.post = {};
config.put = {};
config.static=['../client/'];
//Error
config.error= "/service/error.js";
//Port
config.port=3000;
//Database
config.database= {
	ip:'localhost',
	port:27017,
	name:'test',
	type:'mongodb'
};
//Show logs
config.hasToLog=true;

module.exports=config;
