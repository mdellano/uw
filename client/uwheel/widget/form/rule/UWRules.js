var UWRules=Class.extend({
    _rules:null,
    _customs:null,
    init:function() {
        this._rules={};
        this._customs={rules:{},messages:{}};
    },
    addPattern:function(pattern,message) {
        this._rules['pattern']={pattern:pattern,message:message,type:UWRules.PATTERN};
        return this;
    },
    addRequired:function() {
        this._rules['required']={type:UWRules.REQUIRED};
        return this;
    },
    addRange:function(min,max,step,message) {
        this._rules['number']={type:UWRules.RANGE,min:min,max:max,step:step,message:message};
        return this;
    },
    addCustom:function(name,message,fn) {
        this._customs.rules[name]=fn;
        this._customs.messages[name]=message;
        return this;
    },
    process:function(e) {
        for (var k in this._rules) {
            var rule=this._rules[k];
            switch (rule.type) {
                case UWRules.PATTERN:
                    e.attr('pattern',rule.pattern).attr('data-pattern-msg',rule.message);
                    break;
                case UWRules.REQUIRED:
                    e.attr('required','').attr('data-required-msg',rule.message);
                    break;
                case UWRules.RANGE:
                    e.attr('min',rule.min).attr('data-min-msg',rule.message).attr('max',rule.max).attr('data-max-msg',rule.message).attr('step',rule.step);
                    break;
            }
        }
        if (this._customs) {
            e.kendoValidator(this._customs);
        }
    }
});




UWRules.PATTERN=1;
UWRules.REQUIRED=2;
UWRules.RANGE=3;