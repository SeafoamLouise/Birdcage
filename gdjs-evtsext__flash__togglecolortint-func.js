
if (typeof gdjs.evtsExt__Flash__ToggleColorTint !== "undefined") {
  gdjs.evtsExt__Flash__ToggleColorTint.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Flash__ToggleColorTint = {};
gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1= [];
gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2= [];
gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects3= [];


gdjs.evtsExt__Flash__ToggleColorTint.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Flash__ToggleColorTint.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595ToggleColorTint_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2});
gdjs.evtsExt__Flash__ToggleColorTint.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595ToggleColorTint_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1});
gdjs.evtsExt__Flash__ToggleColorTint.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2[i].getVariables().get("__Flash_ColorTintToggled"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Flash__ColorTint.func(runtimeScene, gdjs.evtsExt__Flash__ToggleColorTint.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595ToggleColorTint_9546GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == (gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2[0].getVariables()).get("__FlashColor_StartingTint")));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2[i].setColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ColorTint") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2[i].getVariables().get("__Flash_ColorTintToggled"), true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1[i].getVariables().get("__Flash_ColorTintToggled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1[k] = gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Flash__ColorTint.func(runtimeScene, gdjs.evtsExt__Flash__ToggleColorTint.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595ToggleColorTint_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == (gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1[0].getVariables()).get("__FlashColor_StartingTint"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1[i].setColor((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1[i].getVariables().get("__FlashColor_StartingTint"))));
}
}}

}


};gdjs.evtsExt__Flash__ToggleColorTint.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Flash__ToggleColorTint.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Flash__ToggleColorTint.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Flash__ToggleColorTint.func = function(runtimeScene, Object, ColorTint, parentEventsFunctionContext) {
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
if (argName === "ColorTint") return ColorTint;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects3.length = 0;

gdjs.evtsExt__Flash__ToggleColorTint.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__ToggleColorTint.GDObjectObjects3.length = 0;


return;
}

gdjs.evtsExt__Flash__ToggleColorTint.registeredGdjsCallbacks = [];