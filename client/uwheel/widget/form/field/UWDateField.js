var UWDateField=UWField.extend({
    format:null,
    config:null,
    label:null,
    init:function(name) {
        this._super(name,'<input>','');
        this.config={};
    },
    prepare:function(e) {
        e.kendoDatePicker(this.config);
        return e;
    }
});