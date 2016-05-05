model.supplier = new DataClass("suppliers", "public");



model.supplier.id = new Attribute("storage","uuid", "key", {autogenerate:true});
model.supplier.companyName = new Attribute("storage", "string");
model.supplier.supplierCode = new Attribute("storage", "string");
model.supplier.abn = new Attribute("storage", "string");
model.supplier.supplierContacts = new Attribute('relatedEntities', 'supplierContacts', 'contactSupplier', {reversePath:true});

model.supplier.methods.importJSON = function(jsonString){

	
    
        
     var objCollection = JSON.parse(jsonString);
   	
		    objCollection.forEach( function(theObject) { 
		    
		   		createSupplier(theObject);
		      
		  });
	
}

function createSupplier(theObject){

	
	theSupplier = ds.supplier.find("id == :1", theObject.uid_sctr);
	if(!theSupplier){
		
		theSupplier= new ds.supplier();}
		
	 
	 	theSupplier.id				= theObject.uid_sctr;
	 	theSupplier.companyName		= theObject.companyName;
	 	theSupplier.supplierCode	= theObject.sctrCode;
	 	theSupplier.abn				= theObject.abn;
	 	
	
	 
	 theSupplier.save();
}

