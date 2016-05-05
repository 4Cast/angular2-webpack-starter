model.costOther = new DataClass("otherCosts", "public");


model.costOther.id = new Attribute("storage","uuid", "key auto", {autogenerate:true});
model.costOther.costDate = new Attribute("storage", "date");
model.costOther.details = new Attribute("storage", "string");


model.costOther.costAmount_int = new Attribute("storage", 'long64');
model.costOther.supplierReference = new Attribute("storage", "string");
model.costOther.supplierName = new Attribute("storage", 'string');
model.costOther.employeeNumber = new Attribute("storage", "string");

model.costOther.isPayroll = new Attribute("storage", "bool");
model.costOther.accountingPeriod = new Attribute("relatedEntity", "period", 'period');
model.costOther.costCode = new Attribute('relatedEntity', 'costCode', 'costCode');
model.costOther.costProject = new Attribute('relatedEntity', 'project', 'project');


var multiplier = 100000;//utilities.multiplier();


model.costOther.costAmount = new Attribute("calculated", 'string');



model.costOther.costAmount.onGet = function(){return utilities.roundToTwo(this.costAmount_int/multiplier)};
model.costOther.costAmount.onSet = function(value){this.costAmount_int = Number(value)*muliplier};
	
	



var utilities = require('utilities');

model.costOther.methods.importJSON = function(json){
	
    var recordsArray = json.records;
        
     //var objCollection = JSON.parse(jsonString);
   	
   	for(var i, i = 0; i < recordsArray.length; i++){
   	
   	
   		theObject = recordsArray[i];
		   // objCollection.forEach( function(theObject) { 
		     
		    	var theProject = ds.project.find('uid_project = :1', theObject.uid_Project);
		   		//var theUser = ds.user.find('uid_user = :1', theObject.uid_user);
		     
		     	var theCostCode = ds.costCode.find('id = :1', theObject.uid_ccod);
		     	
		     	
		     	
				  var theCost = ds.costOther.find('id = :1', theObject.uid_activity);
				  if(!theCost){
				  	
				  	theCost = new ds.costOther;
				  	theCost.id = theObject.uid_activitiy
				  	
				  }
				
				theCost.costDate = new Date (theObject.datePaid * 1000);
				theCost.details = theObject.Description;
				theCost.costAmount_int = theObject.Amount * multiplier;
				theCost.supplierReference = theObject.Supplier_Reference;
				theCost.accountingPeriod = theObject.Month_Number;
				theCost.supplierName = theObject.Supplier_Name;
				theCost.costCode = theCostCode;
				theCost.costProject = theProject;
				
				
		     
		    theCost.save();
		      
		  };
	
}
