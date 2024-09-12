
if (typeof gdjs.evtsExt__Flash__IsTinted !== "undefined") {
  gdjs.evtsExt__Flash__IsTinted.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Flash__IsTinted = {};
gdjs.evtsExt__Flash__IsTinted.GDObjectObjects1= [];
gdjs.evtsExt__Flash__IsTinted.GDObjectObjects2= [];


gdjs.evtsExt__Flash__IsTinted.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595IsTinted_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Flash__IsTinted.GDObjectObjects1});
gdjs.evtsExt__Flash__IsTinted.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__IsTinted.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Flash__ColorTint.func(runtimeScene, gdjs.evtsExt__Flash__IsTinted.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595IsTinted_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "255;255;255");
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Flash__IsTinted.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Flash__IsTinted.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__IsTinted.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__IsTinted.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__IsTinted.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__IsTinted.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Flash__IsTinted.registeredGdjsCallbacks = [];