model.supplier = new DataClass("suppliers", "public");



model.supplier.id = new Attribute("storage","uuid", "key", {autogenerate:true});
model.supplier.companyName = new Attribute("storage", "string");


model.supplier.methods.importJSON = function(jsonString){
	debugger;
	ds.supplier.all().remove();
    
        
     var objCollection = JSON.parse(jsonString);
   	
		    objCollection.forEach( function(theObject) { 
		    
		   		createSsupplier(theObject);
		      
		  });
	
}

function createSupplier(theObject){

	 theSupplier= new ds.supplier({	
	 
	 	id:				theObject.uid_sctr,
	 	companyName:	theObject.companyName
	 	
	 }
}

