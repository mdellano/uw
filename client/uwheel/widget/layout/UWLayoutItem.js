var UWLayoutItem=Class.extend({
    config:null,
    init:function(config) {
        this.config=config;
    },
    acomodateAbsolute:function(widget,area) {
        var ele=widget.me();
        var gap={x:0,y:0};
        if (this.config.width>1)
            gap.x=ele.width(this.config.width).width();
        if (this.config.height>1)
            gap.y=ele.height(this.config.height).height();
        return gap;
    },
    acomodateRelative:function(widget,area) {
       var ele=widget.me();
        var gap={x:0,y:0};
        if (this.config.width<=1)
            gap.x=ele.width(area.width*this.config.width).width();

        if (this.config.height<=1)
            gap.y=ele.height(area.height*this.config.height).height();
        if (this.config.vertical) gap.y=0; else gap.x=0;
        return gap;
    }

});

UWLayoutItem.FILL_HORIZONTAL=function(width,height) {

     return new UWLayoutItem({
         width:width,
         height:height,
         vertical:false
     });


};

UWLayoutItem.FILL_VERTICAL=function(width,height) {

    return new UWLayoutItem({
        width:width,
        height:height,
        vertical:true
    });


};