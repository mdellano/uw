var TreeData=Class.extend({
    text:null,
    icon:null,
    data:null,
    items:null,
    init:function(text,icon,data) {
        this.items=[];
        this.text=text;
        this.icon=icon;
        this.data=data;
    },
    add:function(text,icon,data) {
        var node=new TreeData(text,icon,data);
        this.items.push(node);
        return node;
    }
});