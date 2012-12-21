var UWField=UWWidget.extend({
    validators:null,
    init:function(name) {
        this._super(name);
        validators=[];
    },
    addValidator:function(pFn,pType) {
        var type=pType||UWField.Select;
        pFn.type=pType;
        this.validators.push(pFn);
    },
    ready:function(dom){
        for (var i=i<this.validators.length;i++) {
            var fn=this.validators[i];
            switch (fn.type) {
                case UWField.Select

            }

        }
    }

});

UWField.Select=1;
UWField.LostFocus=2;
UWField.EnterFocus=3;
