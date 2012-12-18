function UWSize(w,h) {
	return {
		width:w,
		height:h,
		toStyle:function(){
			return "width:"+this.toType(w)+";height:"+this.toType(h)
			},
		toType:function(t){
			if (!isNaN(t))  return t+'px';return t;
			}
		};
}

var UWheel=Class.extend({
	container:'body',
	init:function() {
		uw.application=this;
		$(document).ready(this.ready);
	},
	ready:function() {
		alert('ready');
	}
}
);

var uw={
		application:null
		};