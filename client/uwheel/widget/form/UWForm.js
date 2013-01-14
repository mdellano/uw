var UWForm=UWContainer.extend({
    legend:null,
    config:null,
    validator:null,
    buttons: null,
    submit: null,
    model: null,
    init:function(name,layout,layoutData) {
        this._super(name, layout, layoutData);
        this.config = {cols:['50%', '50%']};
        this.tag = '<form></form>';
        this.buttons = [];
        this.submit = null;
        this.model = {};
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

            if ( this.submit ) {
                var btn = $('<button>'+this.submit.caption+'</button>');
                btn.addClass('k-button');
                var ME = this;
                parent.submit(function(e) {
                    if ( ME.submit.handler ) {
                        e.preventDefault();
                        ME.submit.handler();
                    }
                });
                btn.appendTo(parent);
            }

            this.validator=parent.kendoValidator(customs).data('kendoValidator');
            if ( this.ready ) this.ready();
        } else {
            this.attach(parent);
        }

    },
    setSubmit: function(caption,handler) {
        //Save Button
        this.submit = {caption:caption,handler:handler};
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
    },
    setModel: function(model) {
        this.model = model;
        for (var i=0;i<this.childs.length;i++) {
            var field= $('#' + this.childs[i].id) ;
            field.val(this.model[this.childs[i].id]);
        }
    },
    getModel: function() {
        for (var i=0;i<this.childs.length;i++) {
            var field=this.childs[i];
            this.model[field.id] = field.me().val();
        }
        return this.model;
    }
});

/* Enums */
UWForm.FIELD_TYPE = {
    TEXT:'text',
    NUMERIC:'numeric'
}

/* Public Class Methods  */
UWForm.attachTo = function(name,config) {

    function create(name,data) {
        var form = UWForm.build(name,data);
        var saveFn = function() {
            var save = {
                model: null,
                invoke: function(onFinish) {
                    var params = {
                        model: this.model,
                        collection: data.collection
                    };
                    $.get("/form-save", params, function(data) {
                        if ( onFinish ) onFinish(data);
                    });
                }
            };
            save.model = form.getModel();
            if ( config.onSave ) {
                config.onSave(save);
            } else {
                save.invoke();
            }
        }

        form.setSubmit("Guardar",saveFn);
        if ( config._id ) {
            form.ready = function () {
                var params = {
                    collection: data.collection,
                    nsql: {"_id":config._id}
                };
                $.get("/form-load",params,function(data){
                    if ( data[0] ) {
                        form.setModel(data[0]);
                    }
                });
            }
        }

        form.attach();
    }

    //Si tiene URL busco el JSON desde el server
    if ( config.url ) {
        $.ajax({
            url: config.url,
            type: 'get',
            error: function(data){
                alert("error: " + data.responseText);
            },
            success: function(data){
                create(name,data);
            }
        });
    } else {
        create(name,config);
    }

}

UWForm.build = function (name,config) {
    var form = new UWForm(name);
    form.layoutData=UWLayoutItem.FILL_HORIZONTAL(1,1);


    for (var name in config.fields || [] ) {
        var field = config.fields[name];
        if ( field.type == UWForm.FIELD_TYPE.TEXT ) {
            UWForm._processAsField(form,name,field);
        } else if ( field.type == UWForm.FIELD_TYPE.NUMERIC ) {
            UWForm._processAsNumeric(form,name,field);
        }
    }

//    if ( config.save ) {
//        var submit = $("<input type='submit' value='Save'>").appendTo(form);
//        form.addLineBreak();
//        form.addSubmit('submit','Guardar');
//    }

    return form;
}


/* Private Class Methods */
UWForm._processAsNumeric = function(form,name,field) {
    var nf = form.addNumericField(name, field.label);
    if (field.required) nf.rules.addRequired();
    for (var valname in field.validations) {
        var val = field.validations[valname];
        nf.rules.addCustom(valname, val.text, val.validate);
    }
    if ( field.min || field.max || field.step ) nf.rules.addRange(field.min,field.max,field.step,"Los numeros no pueden exceder este rango");
    for (var i = 0; i < field.br || 0; i++) {
        form.addLineBreak();
    }
}

UWForm._processAsField = function(form,name,field) {
    var tf = form.addTextField(name,field.label);
    if ( field.required ) tf.rules.addRequired();
    for ( var valname in field.validations ) {
        var val = field.validations[valname];
        tf.rules.addCustom(valname,val.text,val.validate);
    }
    for ( var i = 0; i < field.br || 0; i++ ) {
        form.addLineBreak();
    }
}


