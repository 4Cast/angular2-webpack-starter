

function doImport () {
	
	var importJson = require('importJson');

 	
 	var jsonString = importJson.importJson("sctr.txt","Cockram Import Files");	
 	//xvar jsonString = loadText( ds.getModelFolder().path + "Import/ccod.txt" );
 	ds.supplier.importJSON(jsonString);
  
 }


doImport();
