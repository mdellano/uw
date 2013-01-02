var UWNumberField=UWField.extend({
    init:function(name) {
        this._super(name,'<input>','');
    },
    prepare:function(e) {
        e.kendoNumericTextBox(this.config);
        return e;
    }
});