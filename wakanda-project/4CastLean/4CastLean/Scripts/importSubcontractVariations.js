

function doImport () {
	
	var importJson = require('importJson');

 	var jsonString = importJson.importJson("scva.txt","Cockram Import Files");	
 	//xvar jsonString = loadText( ds.getModelFolder().path + "Import/ccod.txt" );
 	ds.subcontractVariation.importJSON(jsonString);
  
 }


doImport();