gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1= [];
gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects2= [];
gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1= [];
gdjs.Untitled_32sceneCode.GDName_9595EnterObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595NameObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595NameObjects2= [];
gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1= [];
gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects2= [];
gdjs.Untitled_32sceneCode.GDThank_9595YouObjects1= [];
gdjs.Untitled_32sceneCode.GDThank_9595YouObjects2= [];
gdjs.Untitled_32sceneCode.GDFrom_9595ReinObjects1= [];
gdjs.Untitled_32sceneCode.GDFrom_9595ReinObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPress_95959595Here_95959595to_95959595ProceedObjects1Objects = Hashtable.newFrom({"Press_Here_to_Proceed": gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enter_Name"), gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_Enter"), gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Press_Here_to_Proceed"), gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Press_Here_to_Proceed"), gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPress_95959595Here_95959595to_95959595ProceedObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enter_Name"), gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1[0].getText()));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "stopscroll");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enter_Name"), gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_Enter"), gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Press_Here_to_Proceed"), gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "inori.mp3", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("dummy")) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Name"), gdjs.Untitled_32sceneCode.GDPlayer_9595NameObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595NameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595NameObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == " ";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "Your Name";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Everyone who loves NieR");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") <= 14;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enter_Name"), gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_Enter"), gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Press_Here_to_Proceed"), gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Final Text", 0) + (1.2), "Final Text", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9877812);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("Ps der");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audiobug.mp3", 0, false, 100, 0.75);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 5.1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9878516);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("Px;yer");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 5.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9879804);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("Psay_r");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 5.3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9881188);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("P E ay E r");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 5.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9882276);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("P?_o_yer");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 5.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9883340);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("P_:#yer");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 5.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9884188);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("P+!,er");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 5.7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9885268);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("Pp_yyer");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 5.8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9886348);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("__l%yer");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 5.9;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9887428);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("Pl=>e▉");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9888508);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("Play▉「");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 6.1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9889516);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("Pla▉≡r");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 6.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9891108);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("P_l▉y er");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 6.3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9892196);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("P▉ayer");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 6.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9893044);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("P ayer");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 6.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9894124);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("P▉ayer");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stopscroll") >= 6.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9895204);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Prayer"), gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1[i].getBehavior("Text").setText("Prayer");
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDName_9595EnterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595NameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595NameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDThank_9595YouObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDThank_9595YouObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFrom_9595ReinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFrom_9595ReinObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnter_9595NameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDName_9595EnterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDName_9595EnterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595PrayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595NameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595NameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPress_9595Here_9595to_9595ProceedObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDThank_9595YouObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDThank_9595YouObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFrom_9595ReinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFrom_9595ReinObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
