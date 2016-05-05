model.costImportHeader = new DataClass("costImportHeaders", "public");

model.costImportHeader.id = new Attribute("storage","uuid", "key", {autogenerate:true});
model.costImportHeader.division = new Attribute("storage", "string");
model.costImportHeader.importDate = new Attribute("storage", "date", {simpleDate:false});


model.costImportHeader.numLinesTotal = new Attribute("storage", "long");
model.costImportHeader.numDeleted = new Attribute("storage", "long");
model.costImportHeader.numErrors = new Attribute("storage", "long");
model.costImportHeader.numLinesImported = new Attribute("storage", "long");
model.costImportHeader.numLinesReadyToImport = new Attribute("storage", "long");
model.costImportHeader.numWarnings = new Attribute("storage", "long");
model.costImportHeader.numLinesCombined = new Attribute("storage", "long");


//model.costImportHeader.isDocumentSelected = new Attribute("storage", "bool");
model.costImportHeader.isImportComplete = new Attribute("storage", "bool");
model.costImportHeader.isPayrollMonthly = new Attribute("storage", "bool");
//model.costImportHeader.isPayroll = new Attribute("storage", "bool");
//model.costImportHeader.isProcessingComplete = new Attribute("storage", "bool");
model.costImportHeader.isSupplierInvoices = new Attribute("storage", "bool");
model.costImportHeader.isPayrollWeekly = new Attribute("storage", "bool");
model.costImportHeader.isCombinedComplete = new Attribute("storage", "bool");
model.costImportHeader.importTypeName = new Attribute("calculated", 'string');
model.costImportHeader.importType = new Attribute("storage", 'long');

model.costImportHeader.periodNumber = new Attribute("storage", "long");
model.costImportHeader.periodName = new Attribute("calculated", "string");

model.costImportHeader.sourceData = new Attribute("storage", "blob");
model.costImportHeader.sourceObj = new Attribute("storage", "object");
model.costImportHeader.importFileName = new Attribute("storage", "string");
model.costImportHeader.description = new Attribute("storage", "string");


model.costImportHeader.valueActualCosts = new Attribute("calculated", "number");
model.costImportHeader.valueAllLines = new Attribute("calculated", "number");
model.costImportHeader.valueAllLinesNoErrors = new Attribute("calculated", "number");
model.costImportHeader.valueCombinedLines = new Attribute("calculated", "number");
model.costImportHeader.valueImportedLines = new Attribute("calculated", "number");


model.costImportHeader.employees = new Attribute("relatedEntities", "employees", "employer", {reversePath:true});
//model.employee.employer = new Attribute('relatedEntity', 'costImportHeader', 'costImportHeader');

//model.project.costCodes = new Attribute("relatedEntities", "costCodes", 'project', {reversePath:true});
//model.costImportHeader.costImportDetails = new Attribute("relatedEntities", "costImportDetails", "costImportHeader", {reversPath:true} )


//model.costImportDetail.costImportHeader = new Attribute("relatedEntity", 'costImportHeader', 'costImportHeader');

model.costImportHeader.importTypeName.onGet = function(){
	
	switch (this.importType){
		
		case 1:
			return "Supplier Invoices";
			break;
			
		case 2:
			return "Payroll Monthly";
			break;
			
		case 3:
			return "Payroll Weekly";
			break;
			
		default:
			return "Not Set";
		
	}
}

model.costImportHeader.importTypeName.onSet = function(value){
	
	switch(value){
		
		case "Supplier Invoices":
			this.importType = 1;
			break;
			
		case "Payroll Monthly":
			this.importType = 2;
			break;
		
		case "Payroll Weekly":
			this.importType = 3;
			break;
			
		default:
			this.importType = -1;
		
	}
	
}

model.costImportHeader.periodName.onGet = function(){
	return "";
}

model.costImportHeader.isSupplierInvoices.events.set = function(value){
	this.isSupplierInvoices = true;
}

model.costImportHeader.periodName.onSet = function(value){
	this.periodNumber = this.periodNumber;
}


model.costImportHeader.events.init = function(){
	this.numLinesTotal = 1000;
}

model.costImportHeader.events.validate = function(){
	
	if(this.sourceData){
		this.numDeleted = this.sourceData.size;
	}

	else
		{this.numDeleted = 0;};
	
	
		//this.description = this.sourceData.toString();
	
}

model.costImportHeader.events.save = function(){
	
	this.numLinesTotal = 3000;
	
//	var xmlUtilities = require ('./Modules/xmlUtilities.js');
//	
//	xmlString = this.sourceData.toString();
//	var pos = xmlString.indexOf('<');
//	xmlString = xmlString.slice(pos,xmlString.length);
//	
//	var json = xmlUtilities.xmlToJson(xmlString)
//	jsonText = JSON.stringify(json);
//	this.description = jsonText;
	
}

//model.costImportHeader.sourceData.events.set = function(value){
	
	//this.sourceData = value;
	
//	var xmlUtilities = require ('../Modules/xmlUtilities.js');
//	var xmlString = value.toString;
//	
//	//I don't know why but the File API on the frontend adds a few characters to the beginning og the file.'
//	//So if we look for the first "<" we know that's where the XML actually starts.
//	
//	var pos = xmlString.indexOf('<');
//	xmlString = xmlString.slice(pos,xmlString.length);
//	this.sourceData = new Blob(xmlString);
//	
//	var jsonText = XmlToJSON(xmlString)
//	this.description = xmlString;
	
	//this.sourceObj = xmlUtilities.XMLtoJSON(value);
	
//}
//


model.costImportHeader.methods.processImport = function(){
	
	
	
	
	
}

//model.costImportHeader.methods.importJSON = function(jsonString){

//	ds.costImportHeader.all().remove();


//     var objCollection = JSON.parse(jsonString);

//		    objCollection.forEach( function(theObject) {

//		    	//var theProject = ds.project.find('id = :1', theObject.uid_project);
//		   		//var theUser = ds.user.find('uid_user = :1', theObject.uid_user);

//				    var theNewRecord = new ds.costImportHeader({

//				     	id				          : theObject.uid_aiba,
//				     	costImportHeaderCode			      : theObject.costImportHeaderCode,
//				     	batchDate			      : theObject.importDate,
//				     	isDocumentSelected		: theObject.isDocumentSelected,
//              isImportComplete      : theObject.isImportComplete,
//              isMonthly             : theObject.isMonthly,
//              isPayroll             : theObject.isPayroll,
//              isProcessingComplete  : theObject.isProcessingComplete,
//              isSupplierInvoices    : theObject.isSupplierInvoices,
//              isWeekly              : theObject.isWeekly,
//              numLinesTotal         : theObject.totalLines,
//              numDeleted            : theObject.numDeleted,
//              numErrors             : theObject.numErrors,
//              numLinesImported      : theObject.numImported,
//              isCombinedComplete    : theObject.payrollLinesCombined,
//              periodNumber          : theObject.periodNumber,
//              sourceFileName        : theObject.sourceFileName,
//              description           : theObject.Title,

//				     });

//		    theNewRecord.save();

//		  });

//}
