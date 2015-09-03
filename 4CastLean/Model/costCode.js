model.costCode = new DataClass("costCodes", "public");

model.costCode.id = new Attribute("storage","uuid", "key", {autogenerate:true});
model.costCode.number = new Attribute("storage","long");
model.costCode.name = new Attribute("storage", "string");
model.costCode.project = new Attribute ("relatedEntity","project","project");
model.costCode.amt_budgetOriginal_int = new Attribute("storage", "long64");

// Callculated attributes

// Values as strings

model.costCode.amt_budgetOriginal = new Attribute("calculated", "string");
model.costCode.amt_scntOriginal = new Attribute("calculated", "string");
model.costCode.amt_scntVariations = new Attribute("calculated", "string");
model.costCode.amt_approvedVariations = new Attribute("calculated", 'string');
model.costCode.amt_reallocations = new Attribute("calculated", "string");
model.costCode.amt_budgetRevised = new Attribute("calculated", 'string');

model.costCode.amt_forecasts = new Attribute("calculated", "string");

model.costCode.amt_variance = new Attribute("calculated", "string");

model.costCode.amt_supplierCosts = new Attribute("calculated", "string");
model.costCode.amt_employeeCosts = new Attribute("calculated", "string");
model.costCode.amt_otherCosts = new Attribute("calculated", "string");
model.costCode.amt_totalCosts = new Attribute("calculated", "string");

model.costCode.amt_totalCommitted = new Attribute("calculated", "string");
model.costCode.amt_costToComplete = new Attribute("calculated", "string");

// Values as numbers

model.costCode.amt_budgetOriginal_num = new Attribute("calculated", "number");
model.costCode.amt_scntOriginal_num = new Attribute("calculated", "number");
model.costCode.amt_scntVariations_num = new Attribute("calculated", "number");
model.costCode.amt_approvedVariations_num = new Attribute("calculated", 'number');
model.costCode.amt_reallocations_num = new Attribute("calculated", "number");
model.costCode.amt_budgetRevised_num = new Attribute("calculated", 'number');

model.costCode.amt_forecasts_num = new Attribute("calculated", "number");

model.costCode.amt_variance_num = new Attribute("calculated", "number");

model.costCode.amt_supplierCosts_num = new Attribute("calculated", "number");
model.costCode.amt_employeeCosts_num = new Attribute("calculated", "number");
model.costCode.amt_otherCosts_num = new Attribute("calculated", "number");
model.costCode.amt_totalCosts_num = new Attribute("calculated", "number");

model.costCode.amt_totalCommitted_num = new Attribute("calculated", "number");
model.costCode.amt_costToComplete_num = new Attribute("calculated", "number");

model.costCode.groupNumber = new Attribute("calculated", "long");
model.costCode.groupName = new Attribute('calculated', 'string');



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

