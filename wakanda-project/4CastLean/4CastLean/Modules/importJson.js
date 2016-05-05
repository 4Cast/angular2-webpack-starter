
var importJson =function (fileName,companyFolder){
	
	
	var path = ds.getModelFolder().path + "Import/"+companyFolder +"/"+fileName;
	var jsonString = loadText(path);
	
	
//	var objCollection = JSON.parse(jsonString);

//		    objCollection.forEach( function(theObject) {
//				
//				
//				//ds.project.createProject(theObject);
//		   		ds.project.createProject(theObject);

//		  });
	
	
	return jsonString;
	
}

var multiplier = 10000;

var importSubcontracts = function(fileName, companyFolder){
	
	var jsonString = importJson(fileName, companyFolder);
	
	//ds.subcontract.all().remove();


     var objCollection = JSON.parse(jsonString);

		    objCollection.forEach( function(theObject) {

		   		createSubcontract(theObject);

		  });

}

function createSubcontract(theObject){
	
			var theProject = ds.project.find('id == :1', theObject.uid_project);
		    var theCostCode = ds.costCode.find('id == :1', theObject.uid_ccod);
		    var theContact = ds.supplierContact.find('id == :1', theObject.uid_scct);
		    var theSupplier = ds.supplier.find('id == :1', theObject.uid_sctr);
//		    if(theObject.uid_txra){
//		   		var theTaxCode = ds.taxCode.find('id == :1', theObject.uid_txra);
//		   }

		   var theSubcontract = ds.subcontract.find('id == :1', theObject.uid_scnt);
		   if(!theSubcontract){theSubcontract = new ds.subcontract()}
				     

	     	theSubcontract.id								= theObject.uid_scnt;
	     	theSubcontract.subcontractNumber				= theObject.scntNumber;
	     	theSubcontract.dateContract						= theObject.date_contract;
	     	theSubcontract.dateCommencement					= theObject.date_commenced;
	     	theSubcontract.dateCompletion					= theObject.date_completed;
	     	theSubcontract.amt_contractOriginal_int			= theObject.amt_contractOriginal *multiplier;
	     	theSubcontract.amt_contractOriginalGross_int	= theObject.amt_contractOriginalGross*multiplier;
	     	theSubcontract.amt_contractOriginalTax_int		= theObject.amt_contractOriginalTax*multiplier;
	     	theSubcontract.security_isNoSecurity			= theObject.security_isNoSecurity;
	     	theSubcontract.security_isBankGuarantee			= theObject.security_isBankGuarantee;
	     	theSubcontract.security_isCashRetention			= theObject.security_isCashRetention;
	     	theSubcontract.spec_drawingListing				= theObject.spec_drawingListing;
	     	theSubcontract.spec_otherDocuments				= theObject.spec_otherDocuments;
	     	theSubcontract.spec_program						= theObject.spec_program;
	     	theSubcontract.spec_scopeOfWorks				= theObject.spec_scopeOfWorks;
	     	theSubcontract.spec_specifications				= theObject.spec_specifications;
	     	theSubcontract.spec_worksDescription			= theObject.spec_worksDescription;
	     	theSubcontract.terms_claimDayOfMonth			= theObject.terms_claimDayOfMonth;
	     	theSubcontract.terms_defectsPeriod				= theObject.terms_defectsPeriod;
	     	theSubcontract.terms_liquidatedDamages			= theObject.terms_liquidatedDamages;
	     	theSubcontract.terms_milestoneDates				= theObject.terms_milestoneDates;
	     	theSubcontract.terms_paymentTerms				= theObject.terms_paymentTerms;
	     	theSubcontract.terms_paymentType				= theObject.terms_paymentType;
	     	theSubcontract.subcontractProject				= theProject;
	     	theSubcontract.subcontractCostCode				= theCostCode;
	     	theSubcontract.contact							= theContact;
//				     	theSubcontract.subcontractTaxCode				= theTaxCode;
			theSubcontract.supplier							= theSupplier;
			theSubcontract.security_securityType			= theObject.security_securityType;



				     

		    theSubcontract.save();

}

	


	
	

exports.importJson = importJson;
exports.importSubcontracts = importSubcontracts;