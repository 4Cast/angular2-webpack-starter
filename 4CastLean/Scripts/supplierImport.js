function doImport () {
 	 	
 	var jsonString = loadText( ds.getModelFolder().path + "Import/sctr.txt" );
 	ds.supplier.importJSON(jsonString);
  
 }


doImport();

