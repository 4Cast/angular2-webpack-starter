

function doImport () {
	
	var importJson = require('importJson');

 	
 	var jsonString = importJson.importJson("scct.txt","Cockram Import Files");	
 	//xvar jsonString = loadText( ds.getModelFolder().path + "Import/ccod.txt" );
 	ds.supplierContact.importJSON(jsonString);
  
 }


doImport();

