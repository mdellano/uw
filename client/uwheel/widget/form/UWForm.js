var UWForm=UWContainer.extend({
    legend:null,
    config:null,
    validator:null,
    init:function(name,layout,layoutData) {
      this._super(name,layout,layoutData);
      this.config={cols:['50%','50%']};
      this.tag='<form></form>';
    },
    render:function(parent) {
        if (this.attached) {
            var customs={rules:{},messages:{}};
            var ul=$('<ul></ul>').addClass('uw-fieldset');
            //ul.width('100%').height('100%');
             var li=$('<li></li>').appendTo(ul);
            for (var i=0;i<this.childs.length;i++) {
                var c=this.childs[i];
                if (c.rules) {
                    //Paso las custom rules y wrappeo el form
                    for (var r in c.rules._customs.rules) {
                        customs.rules[r]=function(input) {
                            console.log("id is:",c);
                            if (c.id)
                                if (input.is('[name='+c.id+']')) {
                                    console.log('entre');
                                    return c.rules._customs.rules[r](input);
                                }
                            return true;
                        }
                        customs.messages[r]= c.rules._customs.messages[r];
                    }

                    console.log(c.rules);
                    customs=$.merge(customs, c.rules._customs);
                }
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
            this.validator=parent.kendoValidator(customs).data('kendoValidator');
        } else {
            this.attach(parent);
        }

    },
    addTextField:function(model,label) {
        var f=new UWTextField(model);
        f.label.text=label;
        this.addChild(f);
        return f;
    },
    addEmailField:function(model,label) {
        var f=UWTextField.asEmail(model);
        f.label.text=label;
        this.addChild(f);
        return f;
    },
    addURLField:function(model,label) {
        var f=UWTextField.asURL(model);
        f.label.text=label;
        this.addChild(f);
        return f;
    },
    addPasswordField:function(model,label) {
        var f=UWTextField.asPassword(model);
        f.label.text=label;
        this.addChild(f);
        return f;
    },
    addLineBreak:function() {
        this.addChild(new UWBr());
    },
    addNumericField:function(model,label) {
        var f=new UWNumberField(model);
        f.label.text=label;
        this.addChild(f);
        return f;
    },
    addDateField:function(model,label) {
        var f=new UWDateField(model);
        f.label.text=label;
        this.addChild(f);
        return f;
    },
    addTimeField:function(model,label) {
        var f=new UWTimeField(model);
        f.label.text=label;
        this.addChild(f);
        return f;
    },
    addComboField:function(model,label,dataSource) {
        var f=new UWComboField(model,dataSource);
        f.label.text=label;
        this.addChild(f);
        return f;
    },
    addTextArea:function(model,label) {
        var f=new UWTextArea(model);
        f.label.text=label;
        this.addChild(f);
        return f;
    }


});