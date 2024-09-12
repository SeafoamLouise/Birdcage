
if (typeof gdjs.evtsExt__Flash__ColorTint !== "undefined") {
  gdjs.evtsExt__Flash__ColorTint.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Flash__ColorTint = {};
gdjs.evtsExt__Flash__ColorTint.GDObjectObjects1= [];


gdjs.evtsExt__Flash__ColorTint.userFunc0x7e3c70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.SpriteRuntimeObject} */
const tintedObject = objects[0];
const tint = tintedObject.getColor();
eventsFunctionContext.returnValue = tint;
};
gdjs.evtsExt__Flash__ColorTint.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__ColorTint.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Flash__ColorTint.GDObjectObjects1);
gdjs.evtsExt__Flash__ColorTint.userFunc0x7e3c70(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Flash__ColorTint.func = function(runtimeScene, Object, parentEventsFunctionContext) {
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

gdjs.evtsExt__Flash__ColorTint.GDObjectObjects1.length = 0;

gdjs.evtsExt__Flash__ColorTint.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__ColorTint.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Flash__ColorTint.registeredGdjsCallbacks = [];