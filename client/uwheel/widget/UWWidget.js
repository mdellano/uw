var UWWidget=Class.extend({
	id:null,
    tag:null,
	clazz:null,
	size:null,
	rendered:null,
    attached:null,
    layoutData:null,
 	init:function(name,tag,clazz) {
		if (!name&&tag!='<br>') throw new Error('All widget must have a name');
		this.id=name;
        this.tag=tag||"<div></div>";
        this.clazz=clazz;
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
        if (this.attached)  throw Error("Widget already attached:"+this.id);
        this.attached=true;
		var classStyle=clazz||this.clazz;
		var style=null;
		if (this.size) {
			style=this.size.toStyle();
		}
	
		if (name) {
			return ($(this.tag).attr('id',this.id).addClass(classStyle).attr('style',style).appendTo(name));
		} else {
            var e=$('#'+this.id);
            if (!e){
                return $(this.tag).attr('id',this.id).addClass(classStyle).attr('style',style).appendTo(uw.application.container);
            } else {
                return e.addClass(classStyle).attr('style',style);
            }
		}
	}
});