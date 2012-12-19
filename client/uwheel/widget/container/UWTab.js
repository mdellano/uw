var UWTab=UWWidget.extend({
	config:null,
	tabs:[],
	init:function(name) {
		this._super(name);
		this.config={};
		this.config.select=this.on(this.onSelect);
		 
	},
	adjustSize:function(div) {
		div.width((this.me().width()||this.size.width) - 40);
		div.height((this.me().height()||this.size.height) - 55);
	},
	onSelect:function(e) {
		this.adjustSize(this.me().children('#'+e.contentElement.id));
		
	},
	render:function(container) {
		var e=this.attach(container);
		this._super(container);
		var ul=$('<ul></ul>').appendTo(e);
		for (var i=0;i<this.tabs.length;i++) {
			var tab=this.tabs[i];
			var li=$('<li>'+tab.text+'</li>');
			li.attr('name',tab.name);
			if (tab.selected) {
				li.addClass('k-state-active');
			}
			li.appendTo(ul);
			//If a widget is specified we attach it to the child div.
			if (tab.content) {
				tab.content.attach(e);
			} else {
				$('<div></div>').attr('id',tab.name).appendTo(e);
			}
			
		}
		e.kendoTabStrip(this.config);
	},
	addTab:function(name,text,icon,content,selected) {
		var mc=content;
		if (!mc) mc=new UWContainer(name);		
		this.tabs.push({name:name,text:text,imageUrl:icon,content:mc,selected:selected})
		return this;
	}
}
);