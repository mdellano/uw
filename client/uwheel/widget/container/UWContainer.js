var UWContainer=UWWidget.extend({
	childs:null,
    _layout:null,
	init:function(name,layout,layoutdata) {
		this._super(name);
		this.childs=[];
        this._layout=layout;
        this.layoutData=layoutdata;
	},
	render:function(parent) {
        if (this.attached) {
            this._super(parent);
            for (var i=0;i<this.childs.length;i++) {
                this.childs[i].render(parent);
            }
        } else {
            this.attach(parent);
        }

	},
	addChild:function(child) {
		if (!(child instanceof UWWidget)) throw new Error('All child must be of UWWidget type');
		this.childs.push(child);
		return child;
	},
    layout:function() {

    },
	attach:function(name,style) {
		var dv=this._super(name,style);
        dv.addClass('uw-container');
        this.render(dv);
        var ME=this;
        //Change the normal function for a new one that automatically reners the child
	    this.addChild=function(child) {
            ME.childs.push(child);
            child.render(dv);
        }


    }
}
);