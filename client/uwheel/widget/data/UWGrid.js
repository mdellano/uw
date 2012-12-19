var UWGrid=UWWidget.extend({
	config:null,
	data:null,
	init:function(name) {
		this._super(name);
		this.config={
			sorteable:true,
			groupable:false,
			height: '180px',
			pageable: {
				refresh:true,
				pageSizes:true
			},
			columns:[]	
		};
	},
	render:function(container) {
		var e=this.attach(container);
		this._super(container);
		this.config.dataSource=this.data.connection;
		e.kendoGrid(this.config);
	},
	addColumn:function(field,title,width) {
		width=width||50;
		this.config.columns.push({field:field,title:title,width:width});
		return this;
	}
}
);