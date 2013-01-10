


var _formConf={
    "version": "UWheel 0.01b",
    fields: {
        id: {
            label: "ID",
            type: UWForm.FIELD_TYPE.TEXT,
            required: true,
            br: 1
        },
        name: {
            label: "Nombre",
            type: UWForm.FIELD_TYPE.TEXT,
            required: true,
            validations: {
                ns: {
                    text: "Debe comenzar con mayusculas",
                    validate: function(input) {
                        return input.val()[0] == input.val()[0].toUpperCase();
                    }
                }
            },
            br:1
        },
        lastname: {
            label: "Apellido",
            type: UWForm.FIELD_TYPE.TEXT,
            validations: {
                ns: {
                    text: "Debe comenzar con mayusculas",
                    validate: function(input) {
                        if ( !input.val() ) return true;
                        return input.val()[0] == input.val()[0].toUpperCase();
                    }
                }
            },
            br:1
        },
        address: {
            label: "Direcion",
            type: UWForm.FIELD_TYPE.TEXT
        },
        city: {
            label: "City",
            type: UWForm.FIELD_TYPE.TEXT,
            br:1
        },
        cp: {
            label: "CP",
            type: UWForm.FIELD_TYPE.NUMERIC,
            min: 0,
            max: 9999,
            step: 100
        },
        edad: {
            label: "Edad",
            type: UWForm.FIELD_TYPE.NUMERIC,
            max: 3
        },
        num: {
            label: "Numero",
            type: UWForm.FIELD_TYPE.NUMERIC
        }

    }
};



var myApp=UWheel.extend({
	ready:function(){

        //Viewport
//        var viewPort=new UWViewPort('editor',UWLayout.FILL());

//        var top=viewPort.addChild(new UWContainer('top',UWLayout.FILL(),UWLayoutItem.FILL_HORIZONTAL(1,30)));
//        top.clazz='top-bar';

//        //Creo el menu
//        var menu = new UWMenu('menu');
//
//        //Menu de Socios
//        var partner = menu.addItem('partner', 'Socios');
//        var newPartner = partner.addItem('new', 'Nuevo');
//
//        partner.addItem('delete','Eliminar');
//        partner.addItem('open', 'Abrir');
//        partner.addItem('search', 'Search');
//
//        //Menu de Opciones
//        menu.addItem('options', 'Opciones').addItem('preferences', 'Preferencias');
//        top.addChild(menu);

        //Arranca el form
//        var panel = UWForm.build('panel',{});
//        viewPort.addChild(panel);
//
//        panel.addTextField('id',"ID").rules.addRequired();
//        panel.addLineBreak();
//        panel.addTextField('name','Nombre').rules.addCustom('ns','Debe comenzar con mayuscula!!',function(input){
//            return input.val()[0] == input.val()[0].toUpperCase();
//        });
//        panel.addLineBreak();
//        panel.addTextField('lastname','Apellido').rules.addCustom('ns','Debe comenzar con mayuscula!!',function(input){
//            return input.val()[0] == input.val()[0].toUpperCase();
//        });
//       // panel.addLineBreak();
//        panel.addTextField('address','Direccion');
//        panel.addLineBreak();
//        panel.addTextField('city','Ciudad');
//
//        panel.addLineBreak();
//        panel.addNumericField('cp',"Codigo Postal:").rules.addRange(0,9999,1,"Los numeros no pueden exceder este rango");
//        panel.addNumericField('edad',"Edad:").rules.addRange(null,null,null,"Los numeros no pueden exceder este rango");
//        //panel.addLineBreak();
//        panel.addDateField('date',"Alta");
//        panel.addLineBreak();
//
//        var comboDataSource = new kendo.data.DataSource({
//            transport: {
//                read: "/service"
//            }
//        });
//        var combo = panel.addComboField('type',"Tipo",comboDataSource);
//        //[{text: 'Normal',value:'1'},{text: 'Vitalicio',value:'2'}]
//        panel.addLineBreak();
//        panel.addTimeField('time','Hora');
//
//        panel.addEmailField('email','Correo');
//        panel.addLineBreak();
//
//        panel.addNumericField('num',"Numero:");

//        var form = UWForm.build('editor',_formConf);
//        viewPort.addChild(form);

//        form.attach();
//        form.adjust();

//        window.panel=panel;
//        center.addChild(new UWContainer('right',UWLayout.FILL(),UWLayoutItem.FILL_VERTICAL(250,1)));

//        viewPort.addChild(new UWContainer('bottom',UWLayout.FILL(),UWLayoutItem.FILL_HORIZONTAL(1,30)));



//        viewPort.attach();
//        viewPort.adjust();

        var dataSource = new kendo.data.DataSource({
            transport: {
                read: "/fede"
            }
        });

        dataSource.bind("requestEnd", function(e) {
            console.log(dataSource.data, e.response);
        });

        dataSource.fetch();


    }
	
});

new myApp();