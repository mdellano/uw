


var _data={
    "version": "UWheel 0.01b",
    "profiles": {
        "images": {
            "name": "images",
            "type": "img"
        },
        "sounds": {
            "name": "sounds",
            "type": "sound"
        }
    },
    "symbols": {
        "kindle negro.jpg": {
            "type": "image",
            "profile": "images"
        },
        "/axes.png": {
            "type": "image",
            "profile": "images"
        }
    },
    "stack": {
    },
    "actions": {
        "1926_privateAction": {
            "children": [
            ],
            "params": {
            }
        }
    },
    "mediaobjects": {
        "Actor": {
            "register": true,
            "name": "Actor",
            "position": "UWPosition(0,0)",
            "anchor": "UWPosition(0,0)",
            "size": "UWSize(0,0)",
            "rotation": 0,
            "flip": "UWFlip(false,false)",
            "texture": "UWFormat('kindle negro.jpg')",
            "opacity": 100,
            "attributes": {
            },
            "messages": {
                'find': {
                    name:'find'
                }
            },
            "children": {
            }
        },
        "Background": {
            "register": true,
            "name": "Background",
            "type": "Layer",
            "prototype": "Layer",
            "attributes": {
            },
            "messages": {
            },
            "children": {
                "Actor1": {
                    "register": true,
                    "position": "UWPosition(0,0)",
                    "anchor": "UWPosition(0,0)",
                    "size": "UWSize(0,0)",
                    "rotation": 0,
                    "flip": "UWFlip(false,false)",
                    "scale": "UWScale(100,100)",
                    "texture": "UWFormat('kindle negro.jpg')",
                    "zorder": 4096,
                    "opacity": 100,
                    "locked": false,
                    "visible": true,
                    "attributes": {
                    },
                    "prototype": "Actor",
                    "messages": {
                    },
                    "children": {
                    }
                }
            }
        },
        "Game": {
            "register": true,
            "name": "Game",
            "type": "Layer",
            "prototype": "Layer",
            "attributes": {
            },
            "messages": {
            },
            "children": {
            }
        },
        "Control": {
            "register": true,
            "name": "Control",
            "type": "Layer",
            "prototype": "Layer",
            "attributes": {
            },
            "messages": {
            },
            "children": {
            }
        },
        "Main": {
            "register": true,
            "name": "Main",
            "position": "UWPosition(0,0)",
            "anchor": "UWPosition(0,0)",
            "size": "UWSize(0,0)",
            "rotation": 0,
            "flip": "UWFlip(false,false)",
            "texture": "",
            "type": "Scene",
            "prototype": "Scene",
            "attributes": {
            },
            "messages": {
            },
            "children": {
                "Background": {
                    "register": true,
                    "locked": false,
                    "visible": true,
                    "attributes": {
                    },
                    "prototype": "Background",
                    "type": "Layer",
                    "messages": {
                    }
                },
                "Game": {
                    "register": true,
                    "locked": false,
                    "visible": true,
                    "attributes": {
                    },
                    "prototype": "Game",
                    "type": "Layer",
                    "messages": {
                    }
                },
                "Control": {
                    "register": true,
                    "locked": false,
                    "visible": true,
                    "attributes": {
                    },
                    "prototype": "Control",
                    "type": "Layer",
                    "messages": {
                    }
                }
            }
        },
        "dummy_anonymous": {
            "name": "dummy_anonymous",
            "position": "UWPosition(0,0)",
            "size": "UWSize(0,0)",
            "rotation": 0,
            "attributes": {
            },
            "messages": {
            },
            "texture": ""
        },
        "dummy_button": {
            "name": "dummy_button",
            "position": "UWPosition(0,0)",
            "size": "UWSize(0,0)",
            "type": "Button",
            "rotation": 0,
            "attributes": {
            },
            "messages": {
            },
            "texture": ""
        }
    },
    "instance": {
        "main": {
            "prototype": "Main",
            "register": true,
            "children": {
            }
        }
    }
};

function resize() {
    var splitter=$("#contents");
    splitter.height( $(window).height()-50 );
    splitter.width( $(document).width() );
}


var myApp=UWheel.extend({
	ready:function(){

        //Viewport
        var viewPort=new UWViewPort('editor',UWLayout.FILL());

        var top=viewPort.addChild(new UWContainer('top',UWLayout.FILL(),UWLayoutItem.FILL_HORIZONTAL(1,30)));
        top.clazz='top-bar';
        var menu = new UWMenu('menu');
        var partner = menu.addItem('partner','Socios');
        partner.addItem('new','Nuevo').addItem('vitalicio','Vitalicio');
        partner.addItem('open','Abrir');
        partner.addItem('search','Search');
        menu.addItem('options','Opciones').addItem('preferences','Preferencias');
        top.addChild(menu);

        //Arranca el form
        var panel=new UWForm('panel');
        panel.legend='Form loco';
        panel.layoutData=UWLayoutItem.FILL_HORIZONTAL(1,1);
        viewPort.addChild(panel);

        panel.addTextField('id',"ID").rules.addRequired();
        panel.addLineBreak();
        panel.addTextField('name','Nombre').rules.addCustom('ns','Debe comenzar con mayuscula!!',function(input){
            return input.val()[0] == input.val()[0].toUpperCase();
        });
        panel.addLineBreak();
        panel.addTextField('lastname','Apellido').rules.addCustom('ns','Debe comenzar con mayuscula!!',function(input){
            return input.val()[0] == input.val()[0].toUpperCase();
        });
       // panel.addLineBreak();
        panel.addTextField('address','Direccion');
        panel.addLineBreak();
        panel.addTextField('city','Ciudad');

        panel.addLineBreak();
        panel.addNumericField('cp',"Codigo Postal:").rules.addRange(0,9999,1,"Los numeros no pueden exceder este rango");
        //panel.addLineBreak();
        panel.addDateField('date',"Alta");
        panel.addLineBreak();

        var comboDataSource = new kendo.data.DataSource({
            transport: {
                read: "/service"
            }
        });
        var combo = panel.addComboField('type',"Tipo",comboDataSource);
        //[{text: 'Normal',value:'1'},{text: 'Vitalicio',value:'2'}]
        panel.addLineBreak();
        panel.addTimeField('time','Hora');

        panel.addEmailField('email','Correo');
        panel.addLineBreak();



        window.panel=panel;
//        center.addChild(new UWContainer('right',UWLayout.FILL(),UWLayoutItem.FILL_VERTICAL(250,1)));

//        viewPort.addChild(new UWContainer('bottom',UWLayout.FILL(),UWLayoutItem.FILL_HORIZONTAL(1,30)));



        viewPort.attach();
        viewPort.adjust();

        var dataSource = new kendo.data.DataSource({
            transport: {
                read: "/fede"
            }
        });

        dataSource.bind("requestEnd", function(e) {
            console.log(dataSource.data, e.response);
        });

        dataSource.fetch();

//        $("#menu").kendoMenu();


    }
	
});

new myApp();