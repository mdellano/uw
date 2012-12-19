var UWTextField=UWWidget.extend({
    format:null,
    config:null,
    init:function(name) {
        this._super(name);
        this.config={};
    },
    render:function(container) {
        var e=this.attach(container);
        e.append('<input>').addClass('k-textbox');
        return e; 
    }
});