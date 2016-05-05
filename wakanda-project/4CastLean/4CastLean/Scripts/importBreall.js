
function doImport () {
	
	var importJson = require('importJson');

 	
 	var jsonString = importJson.importJson("breall.txt","Cockram Import Files");	
 	//xvar jsonString = loadText( ds.getModelFolder().path + "Import/ccod.txt" );
 	ds.budgetReallocation.importJSON(jsonString);
  
 }


doImport();

