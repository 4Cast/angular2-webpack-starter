

model.subcontract.events.load = function(event) {
	
	var theVariations= this.variations;
	var approvedVariations = theVariations;//.query("isApproved == true");
	amt_toDateVariations_int = approvedVariations.sum("thisVariationAmount_int");
	
	amt_contractRevised_int = amt_contractOriginal_int + amt_toDateVariations_int;

	
};
