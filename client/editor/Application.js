function resize() {
    var splitter=$("#contents");
    splitter.height( $(window).height()-50 );
    splitter.width( $(document).width() );

}




var myApp=UWheel.extend({
	ready:function(){
        $(window).on('resize',resize);
        resize();


        var c=new UWContainer('mine');

        c.addChild(new UWTextField('fede'));
        c.attach("#contents");

        c.addChild(new UWTextField('fedes'));


        var data=new TreeData('Project','','');
        data.add("Scenes",'','').add("maim");
        data.add('Actors');
         console.log(data.items);


        $("#treeview-right").kendoTreeView({
            dragAndDrop: true,
            dataSource: data.items
        }).data("kendoTreeView");

	}
	
});

new myApp();