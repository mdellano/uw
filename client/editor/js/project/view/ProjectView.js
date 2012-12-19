var ProjectView=Class.extend({
    _project:null,
    _data:null,
    init:function(project) {
        this._project=project;
        this.process();
    },
    process:function() {
        this._data=new TreeData('Project',Resource.icon.PROJECT,null);
        this.processMediaObjects('Scenes',Resource.icon.SCENES,'Scene',Resource.icon.SCENE);
        this.processMediaObjects('Actors',Resource.icon.ACTORS,undefined,Resource.icon.ACTOR);
        this.processActions();
        this.processProfiles();

    },
    processActions:function() {
        var ME=this;
        this._data.add('Actions',Resource.icon.ACTIONS,'').parseModel(
            this._project.data(),
            this._project.data().actions,
            TreeData.keyHelper,
            Resource.icon.ACTION,
            function(node,item,idx){

            },
            function(item,idx){
                return (item.type=='');
            }
        );
    },
    processMediaObjects:function(text,icon,filter,iconchild) {
        var ME=this;
        this._data.add(text,icon,'').parseModel(  this._project.data(),
                                                  this._project.data().mediaobjects,
                                                    TreeData.keyHelper,
                                                    iconchild,
                                                    function(node,item,idx){
                                                        ME.processMessages(node,item);
                                                        ME.processSlots(node,item);
                                                        ME.processChildren(node,item);
                                                    },
                                                    function(item,idx){
                                                        return (item.type==filter);
                                                    });
    },
    processMessages:function(node,model) {
        var messages=node.add('Messages',Resource.icon.MESSAGES,null);
        messages.parseModel(model,model.messages,TreeData.keyHelper,Resource.icon.MESSAGE);
    },
    processSlots:function(node,model) {
        var slots=node.add('Slots',Resource.icon.SLOTS,null);
        slots.parseModel(model,model.slots,TreeData.keyHelper,Resource.icon.MESSAGE);
    },
    processChildren:function(node,model) {
        var children=node.add('Children',Resource.icon.CHILDRENS,null);
        children.parseModel(model,model.children,TreeData.keyHelper,Resource.icon.CHILDREN);
    },
    processProfiles:function() {
        var ME=this;
        this._data.add("Profiles",Resource.icon.PROFILES,'').parseModel(
                                                                        this._project.data(),
                                                                        this._project.data().profiles,
                                                                        TreeData.keyHelper,
                                                                        function(item,idx){
                                                                            switch (item.type) {
                                                                                case 'img':
                                                                                    return Resource.icon.IMAGE;
                                                                                case 'sound':
                                                                                    return Resource.icon.SOUND;
                                                                                case 'plist':
                                                                                    return Resource.icon.PLIST;
                                                                            }
                                                                            return "";
                                                                        },
                                                                        function(node,item,idx){
                                                                            node.parseModel(ME._project.data(),
                                                                                            ME._project.data().symbols,
                                                                                            TreeData.keyHelper,
                                                                                            function(item,idx){
                                                                                                switch (item.type) {
                                                                                                    case 'img':
                                                                                                        return Resource.icon.IMAGE;
                                                                                                    case 'sound':
                                                                                                        return Resource.icon.SOUND;
                                                                                                    case 'plist':
                                                                                                        return Resource.icon.PLIST;
                                                                                                }
                                                                                                return '';
                                                                                            },null,
                                                                                            function(itm,i) {
                                                                                                console.log(itm,idx);
                                                                                                return itm.profile==idx;
                                                                                            }
                                                                                            )
                                                                        });
    }


});