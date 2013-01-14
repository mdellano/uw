var UWSubmit=UWWidget.extend({
    type:null,
    value:null,
    init:function(name,value) {
        this._super(name,'<input>','k-button');
        this.type='submit';
        this.value = value || 'Submit';
    },
    prepare:function(e) {
        return e;
    },
    enrich:function(e) {
        e.attr('type',this.type).attr('value',this.value);
        return e;
    }
});


