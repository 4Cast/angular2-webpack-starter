
function doImport () {
	
	var multiplier = 100000;
	var importJson = require('importJson');
	var moment = require('moment');

 	
 	var jsonString = importJson.importJson("adju.txt","Cockram Import Files");	
 	
 	ds.budgetReallocation.remove();
 	ds.budgetVariation.remove();
 
 	 var objCollection = JSON.parse(jsonString);
   	
		    objCollection.forEach( function(theObject) { 
		     
		    	var theProject = ds.project.find('id = :1', theObject.uid_project);
		   		var adjustType = theObject.AdjustType;
		   		var adjustmentDate = moment.utc(theObject.Date_Created, 'D/M/YY');
		   		
		   	switch(adjustType){
		   			
		   			case "1":
		   				// reallocation
		   				theReallocation = new ds.budgetReallocation({
		   					
		   					id						:theObject.uid_adjustment,
		   					description				:theObject.Description,
		   					reallocationNumber		:theObject.AdjustNo,
		   					reallocationDate		:adjustmentDate,
		   					reallocationProject		:theProject
		   					
		   					
		   				});
		   				
		   				theReallocation.save();
		   				break;
		   				
		   			case "2":
		   				// 
		   				var submittedDate = moment.utc(theObject.Date_Submitted, 'D/M/YY');
		   				
		   				theVariation = new ds.budgetVariation({
		   					id						:theObject.uid_adjustment,
		   					dateRaised				:adjustmentDate,
		   					dateSubmitted			:submittedDate,
		   					variationNumber			:theObject.AdjustNo,
		   					description				:theObject.Description,
		   					eot_costs				:theObject.ExtTimeCosts,
		   					eot_days				:theObject.ExtTimeDays,
		   					externalReference		:theObject.VarExtRefer,
		   					isVariationInClaim		:(theObject.VarInClaim = "true"),
		   					notes					:theObject.VarNotes,
		   					variationStatus			:theObject.VarStatus,
		   					//variationStatusName		:theObject.Variation_Status_Text,
		   					amt_variation_int	:theObject.VarAmount * multiplier,
		   					amt_variationBalance_int	:theObject.Balance * multiplier,
		   					amt_claimAmount_int			:theObject.VariationClaimAmount * multiplier,
		   					amt_claimPercent_int		:theObject.VarPercent * multiplier,
		   					variationProject			:theProject
		   					
		   					
		   				});
		   				
		   				theVariation.save();
		   				break;		   					
		   		}		   		
		   		
		   	})
		}


doImport();



		     