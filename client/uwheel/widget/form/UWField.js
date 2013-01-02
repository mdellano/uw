var UWField=UWWidget.extend({
    config:null,
    label:null,
    init:function(name,tag,clazz) {
        this._super(name,tag,clazz);
        this.label={text:null,width:'100px',textAlign:'right'};
        this.config={required:true};
    },
    render:function(container) {
        var e=this.attach(container);
        e.addClass('uw-field');
         e.attr('required','true');

        if (this.label.text) {
            //.css(this.label)
            e.before($('<label></label>').css(this.label).addClass('k-content').text(this.label.text));
        }
        return this.prepare(e);
    },
    prepare:function(e) {
        return e;
    }

});