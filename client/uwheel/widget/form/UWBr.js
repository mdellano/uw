var UWBr=UWWidget.extend({
    init:function() {
        this._super(null,'<br>');
    },
    render:function(parent) {
        return $(this.tag).appendTo(parent);
    }
});