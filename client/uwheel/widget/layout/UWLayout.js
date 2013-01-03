var UWLayout=Class.extend({
    config:null,
    init:function(config) {
       this.config=config;
    },
    execute:function(container) {
        var div=container.me();
        var area={};
        area.width=(div.width()*this.config.width/100);
        area.height=(div.height()*this.config.height/100);

        //Proceso los hijos absolutos
        var consumed={x:0,y:0};
        for (var i=0;i<container.childs.length;i++) {
            var widget=container.childs[i];
            if (widget.layoutData){
                var gap=widget.layoutData.acomodateAbsolute(widget,area);
                consumed.x+=gap.x;
                consumed.y+=gap.y;
            }
        }
        area.width-=consumed.x;
        area.height-=consumed.y;
        //Proceso los hijos relativos
        for (var i=0;i<container.childs.length;i++) {
            var widget=container.childs[i];
            if (widget.layoutData){
                var gap=widget.layoutData.acomodateRelative(widget,area);
                area.width-=gap.x;
                area.height-=gap.y;
            }
        }


        //Proceso los containers

        for (var i=0;i<container.childs.length;i++) {
            var widget=container.childs[i];
            if (widget._layout){
                  widget._layout.execute(widget);
            }
        }
                 /*
        for (var i=0;i<container.childs.length;i++) {
            var widget=container.childs[i];
            //Si tiene layoutdata acomodo a el y sus hijos
            if (widget.layoutData) {
                widget.layoutData.acomodate(widget,area);
                if (typeof(widget)=='uwcontainer') {
                 w.layout(w);
                }
            }
        }
        */
    }

});

UWLayout.FILL_HORIZONTAL=function() {

    return new UWLayout();


}

UWLayout.FILL= function() { return new UWLayout({
    width:100,
    height:100
});
};