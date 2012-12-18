var myApp=UWheel.extend({
	ready:function(){
		
		
		
	
		
		
		//Grid
		var grid=new UWGrid('grid');
	//	grid.size=UWSize(600,100);
		grid.addColumn('id','ID',100);
		grid.addColumn('percentage','%',100);
		grid.data=new Data("./service").bind();
		//Tab
		var tab=new UWTab('tab');
		tab.addTab('mytab1','Tab1',null,null,true);
		tab.addTab('mytab2','Tab2',null,new UWContainer('pepe').addChild(grid),false);
		tab.size=UWSize(700,250);
		//Container
		var container=new UWContainer('test');
		//container.addChild(grid);
		container.addChild(tab);
		
		//container.addChild(new UWContainer('other').addChild(new UWWidget('mmm')));
		container.attach();
	}
	
});

new myApp();