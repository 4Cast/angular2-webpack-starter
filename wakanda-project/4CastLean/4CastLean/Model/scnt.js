
//model.scnt = new DataClass("scntCollection", "public");



//model.scnt.id = new Attribute("storage","uuid", "key", {autogenerate:true});
//model.scnt.subcontractNumber = new Attribute("storage","long");
//model.scnt.subcontractNumberWithProject = new Attribute("calculated","string");

//model.scnt.dateContract = new Attribute("storage","date");
//model.scnt.dateCommencement = new Attribute("storage", "date");
//model.scnt.dateCompletion = new Attribute('storage', 'date');
//model.subcontract.amt_contractOriginal_int = new Attribute("storage","long64");

//model.scnt.subcontractProject = new Attribute("relatedEntity","project","project");
//model.snct.subcontractCostCode = new Attribute('relatedEntity', 'costCode', 'costCode');
//model.scnt.supplier = new Attribute('relatedEntity', 'supplier', 'supplier');
//model.scnt.supplierName = new Attribute('alias', 'string', 'supplier.companyName');

//model.scnt.methods.importJSON = function(jsonString){
//	debugger;
//	ds.scnt.all().remove();
//    
//        
//     var objCollection = JSON.parse(jsonString);
//   	
//		    objCollection.forEach( function(theObject) { 
//		    
//		   		createSubcontract(theObject);
//		      
//		  });
//	
//}

//var multiplier =100000;

//function createSubcontract(theObject){
//		
//	 		var theProject = ds.project.find('id == :1', theObject.uid_project);
//		    var theCostCode = ds.costCode.find('id == :1', theObject.uid_ccod);
//		    //var theContact = ds.supplierContact.find('id == :1', theObject.uid_scct);
//		    var theSupplier = ds.supplier.find('id == :1', theObject.uid_sctr);
////		    if(theObject.uid_txra){
////		   		var theTaxCode = ds.taxCode.find('id == :1', theObject.uid_txra);
////		   }
//		     
//		    	//var theProject = ds.project.find('uid_project = :1', theObject.uid_project);
//		   		//var theUser = ds.user.find('uid_user = :1', theObject.uid_user);
//		     
//				     theSubcontract = new ds.scnt({
//				     	
//				     	id								: theObject.uid_scnt,
//				     	subcontractNumber				: theObject.scntNumber,
//				     	dateContract					: theObject.date_contract,
//				     	dateCommencement				: theObject.date_commenced,
//				     	dateCompletion					: theObject.date_completed,
//				     	amt_contractOriginal_int		: theObject.amt_contractOriginal *multiplier,
//				     	amt_contractOriginalGross_int	: theObject.amt_contractOriginalGross*multiplier,
//				     	amt_contractOriginalTax_int		: theObject.amt_contractOriginalTax*multiplier,
//				     	security_isNoSecurity			: theObject.security_isNoSecurity,
//				     	security_isBankGuarantee		: theObject.security_isBankGuarantee,
//				     	security_isCashRetention		: theObject.security_isCashRetention,
//				     	spec_drawingListing				: theObject.spec_drawingListing,
//				     	spec_otherDocuments				: theObject.spec_otherDocuments,
//				     	spec_program					: theObject.spec_program,
//				     	spec_scopeOfWorks				: theObject.spec_scopeOfWorks,
//				     	spec_specifications				: theObject.spec_specifications,
//				     	spec_worksDescription			: theObject.spec_worksDescription,
//				     	terms_claimDayOfMonth			: theObject.terms_claimDayOfMonth,
//				     	terms_defectsPeriod				: theObject.terms_defectsPeriod,
//				     	terms_liquidatedDamages			: theObject.terms_liquidatedDamages,
//				     	terms_milestoneDates			: theObject.terms_milestoneDates,
//				     	terms_paymentTerms				: theObject.terms_paymentTerms,
//				     	terms_paymentType				: theObject.terms_paymentType,
//				     	subcontractProject				: theProject,
//				     	subcontractCostCode				: theCostCode
//				     	contact							: theContact,
//				     	subcontractTaxCode				: theTaxCode
//						supplier						: theSupplier
//				     	
//				     				
//				     	
//				     });
//		     
//		    theSubcontract.save();
//	
//}