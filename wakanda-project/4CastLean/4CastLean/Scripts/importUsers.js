
function doImport () {
	
	var importJson = require('importJson');

 	var jsonString = importJson.importJson("users.txt","Cockram Import Files");	
	
 	//xvar jsonString = loadText( ds.getModelFolder().path + "Import/ccod.txt" );
 	ds.user.importJSON(jsonString);
  
 }


doImport();