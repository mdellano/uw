var UWTree=UWWidget.extend({
        config:null,
        data:null,
        init:function(name,data) {
            this._super(name);
            this.config={};
            this.data=data||[];
        },
        processData:function() {
          if (this.data instanceof TreeData) return this.data.items;
          return this.data;
        },
        render:function(container) {
            var e=this.attach(container);
            e.kendoTreeView({
                dragAndDrop: true,
                dataSource: this.processData()
            }).data("kendoTreeView");
        }
    }
);