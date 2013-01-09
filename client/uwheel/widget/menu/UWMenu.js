var UWMenu=UWWidget.extend({
        items: [],
        config:null,
        init:function(name) {
            this._super(name);
            this.config={};
        },
        addUL:function (e, subitems) {
            var ul = $('<ul></ul>').appendTo(e);
            for (var i = 0; i < subitems.length; i++) {
                var item = subitems[i];
                var li = $('<li>' + item.text + '</li>');
                li.attr('name', item.name);
                li.appendTo(ul);

                if ( item.items.length != 0 ) {
                    this.addUL(li,item.items);
                }
            }
            return ul;
        },
        render:function(container) {
            var e=this.attach(container);
            this._super(container);

            var ul = this.addUL(e,this.items);
            ul.kendoMenu(this.config);
        },
        addItem: function(name, text, items) {
            var item = new UWItem(name,text,items);
            this.items.push(item);
            return item;
        }
    }
);

var UWItem=Class.extend({
    name: null,
    text: null,
    items: [],
    init: function(name, text, items) {
        this.name = name;
        this.text = text || name;
        this.items = items || [];
    },
    addItem: function(name, text, items) {
        var item = new UWItem(name,text,items);
        this.items.push(item);
        return item;
    }
});

