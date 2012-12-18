var UWContainer=UWWidget.extend({
	childs:null,
	init:function(name) {
		this._super(name);
		this.childs=[];
		//this.size=UWSize('100%','100%');
	},
	render:function(parent) {
		this._super(parent);
		for (var i=0;i<this.childs.length;i++) {
			this.childs[i].render(parent);
		}
	},
	addChild:function(child) {
		if (!(child instanceof UWWidget)) throw new Error('All child must be of UWWidget type');
		this.childs.push(child);
		return this;
	},
	attach:function(name,style) {
		var dv=this._super(name,style);
        this.render(dv);
        //Change the normal function for a new one that automatically reners the child
	    this.addChild=function(child) {
            child.render(dv);
        }

    }
}
);