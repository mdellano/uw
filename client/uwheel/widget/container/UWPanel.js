
var UWPanel=UWContainer.extend({
    title:null,
    size:null,
    actions:null,
    init:function(id,pTitle) {
       this._super(id);
       this.actions=[];
       this.title=pTitle||'Untitled';
       this.size=new UWSize('100%','100%');
    },
    render:function(parent) {
        if (!this.attached) {
            var e=this.attach(parent);
            return;
        }
        this.me().css({float:'left',marginRight:'1em'});
        var wrap=$("<div></div>").addClass('k-widget k-window').attr('style','padding-top: 0px;' +this.size.toStyle()).appendTo(parent);
        var header=$("<div></div>").addClass('k-window-titlebar k-header').attr('style','margin-top: 0px;').appendTo(wrap);
        $("<span></span>").addClass('k-window-title').attr('style','right: 30px;').text(this.title).appendTo(header);
        $("<div></div>").addClass('k-window-actions').appendTo(header);
        $("<div></div>").addClass('k-window-content k-content').attr('style','min-width: 90px; min-height: 50px;').appendTo(wrap);
        var e=this._super(wrap.find('.k-window-content'));
    }


});







/*
<div class="k-widget k-window" style="padding-top: 29px; width: 600px; height: 100%; top: 142px; left: 0px; z-index: 10003;" data-role="draggable">
    <div class="k-window-titlebar k-header" style="margin-top: -29px;">
    &nbsp;
        <span class="k-window-title" style="right: 30px;" id="ll_wnd_title">About Alvar Aalto</span>
        <div class="k-window-actions">
            <a role="button" href="#" class="k-window-action k-link">
                <span role="presentation" class="k-icon k-i-close">Close</span></a>
        </div>
    </div>
    <div id="ll" data-role="window" class="k-window-content k-content" style="min-width: 90px; min-height: 50px;" tabindex="0" role="dialog" aria-labelledby="ll_wnd_title">
    </div>
</div>
    */