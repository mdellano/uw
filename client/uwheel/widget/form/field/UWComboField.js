var UWComboField=UWField.extend({
    format:null,
    label:null,
    init:function(name,dataSource) {
        this._super(name,'<input>','');
        this.config.dataTextField='text';
        this.config.dataValueField='value';
        this.config.optionLabel=    'Select...';
        if ( dataSource ) this.config.dataSource = dataSource;
    },
    setOptions: function(dataSource) {
        if ( dataSource ) this.config.dataSource = dataSource;
    },
    prepare:function(e) {
        e.kendoDropDownList(this.config);
        return e;
    }
});