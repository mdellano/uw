var UWTextField=UWField.extend({
    init:function(name) {
        this._super(name,'<input>','k-textbox');
        this.config={};
    },
    prepare:function(e) {
        return e;
    }
});