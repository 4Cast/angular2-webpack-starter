

function doImport () {

	var importJson = require('importJson');

 	
 	var jsonString = importJson.importJson("aiba.txt");	
 	
 	ds.costImportHeader.importJSON(jsonString);

 }


doImport();


