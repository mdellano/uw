var UWForm=UWContainer.extend({
    legend:null,
    config:null,
    init:function(name,layout,layoutData) {
      this._super(name,layout,layoutData);
      this.config={cols:['50%','50%']};
      this.tag='<form></form>';
    },
    render:function(parent) {
        if (this.attached) {
            var ul=$('<ul></ul>').addClass('uw-fieldset');
            //ul.width('100%').height('100%');
             var li=$('<li></li>').appendTo(ul);
            for (var i=0;i<this.childs.length;i++) {
                var c=this.childs[i];
                if (c.tag!='<br>') {
                    if (c.form) {
                       // c.render($('<td></td>').css(c.form).appendTo(tr));
                       // col+=c.form.colSpan;
                    } else {
                        c.render(li);
                    }
                }   else {
                    li=$('<li></li>').appendTo(ul);
                }

            }
            ul.appendTo(parent);
            parent.kendoValidator();
        } else {
            this.attach(parent);
        }

    },
    addTextField:function(model,label) {
        var f=new UWTextField(model);
        f.label.text=label;
        this.addChild(f);
        return this;
    },
    addEmailField:function(model,label) {
        var f=UWTextField.asEmail(model);
        f.label.text=label;
        this.addChild(f);
        return this;
    },
    addURLField:function(model,label) {
        var f=UWTextField.asURL(model);
        f.label.text=label;
        this.addChild(f);
        return this;
    },
    addPasswordField:function(model,label) {
        var f=UWTextField.asPassword(model);
        f.label.text=label;
        this.addChild(f);
        return this;
    },
    addLineBreak:function() {
        this.addChild(new UWBr());
        return this;
    },
    addNumericField:function(model,label) {
        var f=new UWNumberField(model);
        f.label.text=label;
        this.addChild(f);
        return this;
    },
    addDateField:function(model,label) {
        var f=new UWDateField(model);
        f.label.text=label;
        this.addChild(f);
        return this;
    },
    addTimeField:function(model,label) {
        var f=new UWTimeField(model);
        f.label.text=label;
        this.addChild(f);
        return this;
    },
    addComboField:function(model,label) {
        var f=new UWComboField(model);
        f.label.text=label;
        this.addChild(f);
        return this;
    },
    addTextArea:function(model,label) {
        var f=new UWTextArea(model);
        f.label.text=label;
        this.addChild(f);
        return this;
    }


});