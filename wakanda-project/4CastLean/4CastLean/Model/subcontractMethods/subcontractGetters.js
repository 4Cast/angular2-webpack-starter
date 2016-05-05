multiplier = 10000;

model.subcontract.amt_contractOriginal.onGet = function(){return this.amt_contractOriginal_int/multiplier;};
model.subcontract.amt_contractOriginalGross.onGet = function(){return this.amt_contractOriginalGross_int/multiplier;};
model.subcontract.amt_contractOriginalTax.onGet = function(){return this.amt_contractOriginalTax_int/multiplier;};


model.subcontract.amt_toDateApproved.onGet = function(){return this.amt_toDateApproved_int/multiplier};

model.subcontract.amt_toDateClaimed.onGet = function(){return this.amt_toDateClaimed_int/multiplier};


////model.subcontract.dateContractStr.onGet = function(){return dateContract = utilities.stringToDate(value);};


////model.subcontract.dateCommenceStr.onGet = function(){return dateCommence = utilities.stringToDate(value);};


////model.subcontract.dateCompleteStr.onGet = function(){return dateComplete = utilities.stringToDate(value);};

model.subcontract.amt_toDateVariations_int.onGet = function(){
	
	
	var theVariations= this.variations;
	var approvedVariations = theVariations;//.query("isApproved == true");
	return approvedVariations.sum("amt_thisVariationAmount_int");
	
}

model.subcontract.amt_toDateVariations.onGet = function(){

	return this.amt_toDateVariations_int/multiplier;
//var theVariations= this.supplierPayments;
//	var approvedVariations = theVariations.query("isApproved == true");
//	var value = approvedVariations.sum("thisVariationAmount_int")/multiplier;
//	return utilities.roundToTwo(value);

};


model.subcontract.security_securityTypeName.onGet = function(){
	
	
	
	switch(this.security_securityType){
	
		case 1:
			return "Cash Retention";
			break; 
			
		case 2:
			return "Bank Guarantee";
			break;
			
		case 3:
			return "No Security";
			break;
			
		default:
			return "Not Found";
			
	}	
	
}

