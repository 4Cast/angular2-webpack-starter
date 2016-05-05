model.costCodeGroup = new DataClass("costCodeGroups", "public");

model.costCodeGroup.id = new Attribute("storage","uuid", "key auto", {autogenerate:true});
model.costCodeGroup.groupNumber = new Attribute("storage", "long")
model.costCodeGroup.groupName = new Attribute("storage", "string");
model.costCodeGroup.groupCostCodes = new Attribute("relatedEntities", "costCodes", "parentGroup", {reversePath:true});
model.costCodeGroup.parentProject = new Attribute("relatedEntity", "project", "project");

