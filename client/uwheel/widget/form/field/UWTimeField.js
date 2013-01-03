var UWTimeField=UWField.extend({
    init:function(name) {
        this._super(name,'<input>','');
    },
    prepare:function(e) {
        e.kendoTimePicker(this.config);
        return e;
    }
});