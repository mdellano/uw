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
                var anchor = $('<a></a>');
                $('<span>'+item.text+'</span>').appendTo(anchor);
                if ( item.handlers.length != 0 ) {
                    var call = function() {
                        for ( var handler in item.handlers ) {
                            item.handlers[handler]();
                        }
                    };
                    anchor.attr('onclick',call);
                }

                var li = $('<li></li>');
                anchor.appendTo(li);
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
        addItem: function (name, text, handler) {
            var item = new UWItem(name,text,handler);
            this.items.push(item);
            return item;
        }
    }
);

var UWItem=Class.extend({
    name: null,
    text: null,
    items: [],
    handlers: [],
    init: function(name, text, handler) {
        this.name = name;
        this.text = text || name;
        this.handlers = [];
        if ( handler ) this.handlers.push(handler);
        this.items = [];
    },
    addItem: function( name, text, handler ) {
        var item = new UWItem(name,text,handler);
        this.items.push(item);
        return item;
    },
    addHandler: function( handler ) {
        if ( handler ) this.handlers.push( handler );
    }
});

