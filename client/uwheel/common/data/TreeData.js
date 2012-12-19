var TreeData=Class.extend({
    text:null,
    imageUrl:null,
    data:null,
    items:null,
    init:function(text,icon,data) {
        this.items=[];
        this.text=text;
        this.imageUrl=icon;
        this.data=data;
    },
    add:function(text,icon,data) {
        var node=new TreeData(text,icon,data);
        this.items.push(node);
        return node;
    },
    modelPath:function(model,path) {
      var paths=path.split('.');
      if (paths.length==1) {
          return model[paths[0]];
      }
       var target=paths[0];
       paths=paths.splice(1,paths.length-1);
       return this.modelPath(model[target],paths.join('.'));
    },
    parseModel:function(model,path,textPropertyOrFn,iconOrFn,processNodeFn,filterModelFn) {
        var tFn=textPropertyOrFn;
        var fFn=filterModelFn||function(item,idx){return true};
        var nFn=processNodeFn||function(node,item,idx){};
        var iFn=iconOrFn;
        if (typeof textPropertyOrFn == "string") tFn=function(item,i){ return textPropertyOrFn;};
        if (typeof iconOrFn == "string") iFn=function(item,i){ return iconOrFn;};
        var arr=path;
        if (path instanceof String) {
            arr=this.modelPath(model,path);
        }


            for (var i in arr) {
               var item=arr[i];
               if (fFn(item,i))
                    nFn(this.add(tFn(item,i),iFn(item,i),item),item,i);
            }


    }
});

TreeData.keyHelper=function(item,idx) { return idx;};