var UWWidget=Class.extend({
	id:null,
	clazz:null,
	size:null,
	rendered:false,
 	init:function(name) {
		if (!name) throw new Error('All widget must have a name');
		this.id=name;
	},
	render:function(parent) {
		if (this.rendered) throw new Error("Widget already rendered");
		this.rendered=true;
	},
	me:function() {
		return $('#'+this.id);
	},
	on:function(fn) {
		var _this=this;
		return function(e) {
			fn.call(_this,e);
		};
	},
	attach:function(name,clazz) {
		if (this.rendered) throw Error("Widget already attached:"+this.id);
		var nstyle=clazz||this.clazz;
		var style=null;
		if (this.size) {
			style=this.size.toStyle();
		}
	
		if (name) {
			return ($("<div></div>").attr('id',this.id).attr('class',clazz).attr('style',style).appendTo(name));
		} else {
			return ($("<div></div>").attr('id',this.id).attr('class',clazz).attr('style',style).appendTo(uw.application.container));
		}
	}
});