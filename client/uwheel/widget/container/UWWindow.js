var UWWindow=UWContainer.extend({
    render:function(parent) {
        //Como es un conteneor, si esta actuando de hijo lo attacheo
        if (!this.attached) {
            this.attach(parent)
            return;
        }
        this._super(parent);
        this.me().kendoWindow({
            width: "600px",
            height:'100%',
            draggable:false,
            title: "About Alvar Aalto",
            close: function(){}
        });
    }
});