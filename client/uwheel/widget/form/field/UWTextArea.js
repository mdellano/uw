var UWTextArea=UWField.extend({
    format:null,
    config:null,
    label:null,
    init:function(name) {
        this._super(name,'<textarea>','');
        this.config={};
    },
    prepare:function(e) {
        try {
        e.attr('rows',"10").attr('cols',"30");

        e.kendoEditor().data('kendoEditor');
        } catch (r) {
        }
        return e;
    }
});