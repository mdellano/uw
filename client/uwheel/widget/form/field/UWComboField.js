var UWComboField=UWField.extend({
    format:null,
    label:null,
    init:function(name) {
        this._super(name,'<input>','');
        this.config.dataTextField='text';
        this.config.dataValueField='value'
        this.config.optionLabel=    'Select...';
    },
    prepare:function(e) {
        e.kendoDropDownList(this.config);
        return e;
    }
});