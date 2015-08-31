model.costCode = new DataClass("costCodes", "public");

model.costCode.id = new Attribute("storage","uuid", "key", {autogenerate:true});
model.costCode.number = new Attribute("storage","long");
model.costCode.name = new Attribute("storage", "string");
model.costCode.project = new Attribute ("relatedEntity","project","project");


model.costCode.methods.importJSON = function(jsonString){
	
	ds.costCode.all().remove();
    
        
     var objCollection = JSON.parse(jsonString);
   	
		    objCollection.forEach( function(theObject) { 
		     
		    	var theProject = ds.project.find('id = :1', theObject.uid_project);
		   		//var theUser = ds.user.find('uid_user = :1', theObject.uid_user);
		     
				     theCostCode = new ds.costCode({
				     	
				     	id				: theObject.uid_ccod,
				     	number			: theObject.costCodeNumber,
				     	name			: theObject.costCodeName,
				     	project			 : theProject
				     });
		     
		    theCostCode.save();
		      
		  });
	
}

