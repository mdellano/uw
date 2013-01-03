var UWField=UWWidget.extend({
    config:null,
    label:null,
    rules:null,
    init:function(name,tag,clazz) {
        this._super(name,tag,clazz);
        this.config={};
        this.label={text:null,width:'100px',textAlign:'right'};
        this.rules=new UWRules();
    },
    render:function(container) {
        var e=this.attach(container);
        e.addClass('uw-field');
        //Proceso las reglas que me agregaron
        this.rules.process(e);
        if (this.label.text) {
            //.css(this.label)
            e.before($('<label></label>').attr('for',this.id)
                                         .css(this.label)
                                         .addClass('k-content')
                                         .text(this.label.text));
        }
        e.after($('<span></span>').addClass('k-invalid-msg')
                                  .attr('data-for',this.id));
        return this.prepare(e);

    },
    prepare:function(e) {
        return e;
    }

});