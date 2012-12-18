var Data=Class.extend({
	config:null,
	connection:null,
	init:function(readURL) {
		this.config={
		    pageSize: 10,
			transport: {
				read:'./service'		
			},
             schema: { // describe the result format
                    data:''
            }
		};
	},
	bind:function(notReading) {
		this.connection=new kendo.data.DataSource(this.config);
	//	if (!notReading) this.connection.read();
		return this;
		this.connection=new kendo.data.DataSource({
		                        transport: {
		                            read: {
		                                url: "./service", // the remove service url
		                                dataType: "jsonp", // JSONP (JSON with padding) is required for cross-domain AJAX
		                                data: { //additional parameters sent to the remote service
		                                    q: function() {
		                                        return {id:'21'};
		                                    }
		                                }
		                            }
		                        },
		                        schema: { // describe the result format
		                            data: function(response) {
									             return response.data;
									         } // the data which the data source will be bound to is in the "results" field
		                        },
		                        change: function() { // subscribe to the CHANGE event of the data source
		                            alert('cange');
		                        }
		                    });
		return this;
	}
});