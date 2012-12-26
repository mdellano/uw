var UWViewPort=UWContainer.extend({
    normalize:function() {
        //Se asegura que el viewport ocupe todo el body o lo que hayan definido
        var parent=this.me();
        parent.width($(window).width());
        parent.height($(window).height());
    },
    adjust:function() {
        this.normalize();
        if (!this._layout)this._layout=UWLayout.FILL();
         (this._layout.execute(this));
    },
    render:function(parent) {

      this._super(parent);
      $(window).on('resize',this.on(this.adjust));
    }

});