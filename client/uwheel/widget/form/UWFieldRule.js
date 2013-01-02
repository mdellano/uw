var UWFieldRule=Class.extend({
    rule:null,
    tag:null,
    message:null,

    init:function(name,tag,message) {
        this.rule=name;
        this.tag=tag;
        this.message=message;
    }

});

UWFieldRule.pattern=function(name,pattern,message) {


}
