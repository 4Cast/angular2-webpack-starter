model.user = new DataClass("users", "public", "person", { 
    restrictingQuery: { queryStatement: "isUser == true" }, 
    allowOverrideStamp : true
}

);

model.user.password = new Attribute("calculated", "string");
model.user.HA1Key = new Attribute("storage", "string", "btree");
model.user.role = new Attribute("storage", "string", "btree");
model.user.profileId = new Attribute("storage", "string");
model.user.userNumber = new Attribute("storage", "long");
model.user.loginName = new Attribute("storage", "string")


//Calculated Attributes.
model.User.password.onGet = function() {
	return "*****"; //could also return Null.
};

model.User.password.onSet = function(value) {
	this.HA1Key = directory.computeHA1(this.ID, value);
};

//Entity methods.
model.User.entityMethods = {};

model.User.entityMethods.validatePassword = function(password){
	var ha1 = directory.computeHA1(this.ID, password);
	return (ha1 === this.HA1Key); //true if validated, false otherwise.
};




model.user.methods.importJSON = function(jsonString){
	debugger;
	ds.user.all().remove();


     var objCollection = JSON.parse(jsonString);

		    objCollection.forEach( function(theObject) {

		   		createUser(theObject);

		  });

}

model.user.methods.importJSON.scope = "public";

function createUser(theObject){
			
			var theHA1Key = directory.computeHA1(theObject.uid_user, theObject.Password)
	 		var theUser = new ds.user({
	 			id					: theObject.uid_user,
	 			givenName			: theObject.userFirstName,
	 			familyName			: theObject.userSurname,
	 			fullName			: theObject.userFullName,
	 			isUser				: true,
	 			HA1Key				: theHA1Key,
	 			profileId			: theObject.uid_profile,
	 			userNumber			: theObject.userNumber,
	 			loginName			: theObject.userShortName
	 			
	 		})
	 		
	 		

		    theUser.save();

}