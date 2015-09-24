

//////////////////////////////////////////////////////////////
//
// Calculations
//
//////////////////////////////////////////////////////////////


//
// Approved Variations ////////////////////////////////////
//
var multiplier = 100000;


model.costCode.amt_approvedVariations.onGet = function(){
	
	var value = this.amt_approvedVariations_int/multiplier;
	var returnValue = utilities.wholeNumber(value);
	return returnValue;
	
}

//
// Reallocations ////////////////////////////////////
//



model.costCode.amt_reallocations.onGet = function(){
	
return utilities.roundToTwo(this.amt_reallocations_int/multiplier);

}

//
// Revised Budget ////////////////////////////////////
//


model.costCode.amt_budgetRevised.onGet = function(){
	
	return utilities.roundToTwo(this.amt_budgetRevised_num);
	
}


//
// Subctonctract Original ////////////////////////////////////
//


model.costCode.amt_scntOriginal.onGet = function(){
	
	var value =  this.amt_scntOriginal_int/multiplier;
	return utilities.roundToTwo(value);
	
}

//
// Subctonctract Variations ////////////////////////////////////
//

model.costCode.amt_scntVariations.onGet = function(){

	var value = this.amt_scntVariations_int/multiplier;
	var returnValue = utilities.roundToTwo(value);
	return returnValue;
	
}

//
// Total Committed ////////////////////////////////////
//

model.costCode.amt_totalCommitted.onGet = function(){
	
	var value = this.amt_totalCommitted_int/multiplier;
	return utilities.roundToTwo(value);
	
}


//
// costToComnplete ////////////////////////////////////
//

model.costCode.amt_costToComplete.onGet = function(){
	
	var value = this.amt_costToComplete_int/multiplier;
	var returnValue = utilities.roundToTwo(value);
	return returnValue;
	
}


//
// Variance ////////////////////////////////////
//


model.costCode.amt_variance.onGet = function (){
	
	var variance_int = this.amt_budgetRevised_int - this.amt_totalCommitted_int;
	var value = variance_int/multiplier;
	return utilities.roundToTwo(value);
	
}

//
// Supplier Costs ////////////////////////////////////
//

model.costCode.amt_supplierCosts.onGet = function(){
	
	var thePayments = this.supplierPayments;
	var approvedPayments = thePayments.query("isApproved == true");
	var value = approvedPayments.sum("thisApprovedAmount_int")/multiplier;
	return utilities.roundToTwo(value);
	
}



model.costCode.amt_approvedVariations.onGet = function(){
	
	var value = this.amt_approvedVariations_int/multiplier;
	var returnValue = utilities.wholeNumber(value);
	return returnValue;
	
}

//
// Reallocations ////////////////////////////////////
//



model.costCode.amt_reallocations.onGet = function(){
	
return utilities.roundToTwo(this.amt_reallocations_int/multiplier);

}

//
// Revised Budget ////////////////////////////////////
//


model.costCode.amt_budgetRevised.onGet = function(){
	
	value = this.amt_budgetRevised_int/multiplier;
	return utilities.roundToTwo(value);
	
}


//
// Subctonctract Original ////////////////////////////////////
//


model.costCode.amt_scntOriginal.onGet = function(){
	
	var value =  this.amt_scntOriginal_int/multiplier;
	return utilities.roundToTwo(value);
	
}

//
// Subctonctract Variations ////////////////////////////////////
//

model.costCode.amt_scntVariations.onGet = function(){

	var value = this.amt_scntVariations_int/multiplier;
	var returnValue = utilities.roundToTwo(value);
	return returnValue;
	
}

//
// Total Committed ////////////////////////////////////
//

model.costCode.amt_totalCommitted.onGet = function(){
	
	var value = this.amt_totalCommitted_int/multiplier;
	return utilities.roundToTwo(value);
	
}


//
// costToComnplete ////////////////////////////////////
//

model.costCode.amt_costToComplete.onGet = function(){
	
	var value = this.amt_costToComplete_int/multiplier;
	var returnValue = utilities.roundToTwo(value);
	return returnValue;
	
}


//
// Variance ////////////////////////////////////
//


model.costCode.amt_variance.onGet = function (){
	
	var variance_int = this.amt_budgetRevised_int - this.amt_totalCommitted_int;
	var value = variance_int/multiplier;
	return utilities.roundToTwo(value);
	
}

//
// Supplier Costs ////////////////////////////////////
//

model.costCode.amt_supplierCosts.onGet = function(){
	
	var thePayments = this.supplierPayments;
	var value = 0;
	//var approvedPayments = thePayments.query("isApproved == true");
	//var value = approvedPayments.sum("thisApprovedAmount_int")/multiplier;
	return utilities.roundToTwo(value);
	
}

var utilities = require('utilities');





