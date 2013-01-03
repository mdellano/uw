var UWTextField=UWField.extend({
    type:null,
    init:function(name) {
        this._super(name,'<input>','k-textbox');

        this.type='text';
    },
    prepare:function(e) {
        return e;
    },
    enrich:function(e) {
        e.attr('type',this.type);
        return e;
    }
});

UWTextField.asEmail=function(name) {
    var f=new UWTextField(name);
    f.type='email';
    return f;
};

UWTextField.asURL=function(name) {
    var f=new UWTextField(name);
    f.type='url';
    return f;
};

UWTextField.asPassword=function(name) {
    var f=new UWTextField(name);
    f.type='password';
    return f;
};

