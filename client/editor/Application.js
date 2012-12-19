


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
        $(window).on('resize',resize);
        resize();


        var c=new UWContainer('contents');
        c.attach();


        var project=new Project(_data);
        var view=new ProjectView(project);

        var panel=new UWPanel('panel');
        panel.size=new UWSize(300,'100%');
        panel.title='Proyect';
        panel.addChild(new UWTree('tree',view._data));
        c.addChild(panel);

        var center=new UWPanel('center');
        center.size=new UWSize(300,'100%');
        center.title='Proyect';

        c.addChild(center);


        resize();
	}
	
});

new myApp();