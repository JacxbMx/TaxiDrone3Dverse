import { DOBlade1 } from "./Blades.js";
import { SetCamera, cameraAspa, cameraComparative, cameraConfig, cameraPaint, cameraWelcome } from "./Cameras.js";
import { blackColor, blackFont, greenColor, whitheFont, whiteColor } from "./Colors.js";
import { ComparativeDroneVisualization, ConfigDroneVisualization, DroneCustomWhichBladeIs, DroneOgWhichBladeIs, InitDroneVisualization, StartDOHover, StopDCAnim, StopDOAnim, rootnode_drone } from "./main5.js";

 //button sets
export var isConfigureBlades = false;
export var isConfigureMats = false;
export var isConfigureAnims = false;



export function IntitUI(){
    //Set started visualization of UI
    VisbilityWelcomeWindow("flex");
    VisibilityConfigurationWindow("none");
    VisibilityComparisonWindow("none");
}

export function WelcomeWindow(){
    VisbilityWelcomeWindow("flex");
    VisibilityConfigurationWindow("none");
    VisibilityComparisonWindow("none");
    InitDroneVisualization();
    StopDOAnim();
    StartDOHover();
    
    //camera
        SetCamera(cameraWelcome);

    //Manage options
        DroneOgWhichBladeIs();

    //UpdateButtos
        document.getElementById("bttn-go-Welcome").style.color = greenColor;
        document.getElementById("bttn-go-Config").style.color = whitheFont;
        document.getElementById("bttn-go-Comparison").style.color = whitheFont;
        
    //Disable flow windows
        document.getElementById("bttn-go-Welcome").style.pointerEvents = "none";
        document.getElementById("bttn-go-Config").style.pointerEvents = "auto";
        document.getElementById("bttn-go-Comparison").style.pointerEvents = "auto";


}
export function ConfigWindow(){
    VisbilityWelcomeWindow("none");
    VisibilityConfigurationWindow("flex");
    VisibilityComparisonWindow("none");
    ConfigDroneVisualization();
    StopDCAnim();
    StopDOAnim();

    //camera
        SetCamera(cameraConfig);

    //Manage configuration set
        isNothingConfigurable();

    //Manage options
        DroneCustomWhichBladeIs();

    //UpdateButtos
        document.getElementById("bttn-go-Welcome").style.color = whitheFont;
        document.getElementById("bttn-go-Config").style.color = greenColor;
        document.getElementById("bttn-go-Comparison").style.color = whiteColor;

     //Disable flow windows
        document.getElementById("bttn-go-Welcome").style.pointerEvents = "auto";
        document.getElementById("bttn-go-Config").style.pointerEvents = "none";
        document.getElementById("bttn-go-Comparison").style.pointerEvents = "auto";
    //Enable lights
        VisibilitySetLights("inline");
}
export function ComparativeWindow(){
    VisbilityWelcomeWindow("none");
    VisibilityConfigurationWindow("none");
    VisibilityComparisonWindow("flex");
    ComparativeDroneVisualization();

    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : false, isChange : false, no360 : true, noHover : true, noChange : false}});
    rootnode_drone[1].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : false, isChange : false, no360 : true, noHover : true, noChange : false}});
    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : true, isHover : false, isChange : false, no360 : false, noHover : true, noChange : false}});
    rootnode_drone[1].setComponent('animation_controller',{ dataJSON: {  is360 : true, isHover : false, isChange : false, no360 : false, noHover : true, noChange : false}});
    //camera
        SetCamera(cameraComparative);

    //Manage options
        DroneCustomWhichBladeIs();
        DOBlade1();

    //UpdateButtos
        document.getElementById("bttn-go-Welcome").style.color = whitheFont;
        document.getElementById("bttn-go-Config").style.color = whitheFont;
        document.getElementById("bttn-go-Comparison").style.color = greenColor;
    //Disable flow windows
        document.getElementById("bttn-go-Welcome").style.pointerEvents = "auto";
        document.getElementById("bttn-go-Config").style.pointerEvents = "auto";
        document.getElementById("bttn-go-Comparison").style.pointerEvents = "none";
}

//Methods to Manage visbility of UI
export function VisbilityWelcomeWindow(visbility){
    document.getElementById("welcome-window").style.display = visbility;
    document.getElementById("start-button").style.display = visbility;
}

export function VisibilityConfigurationWindow(visbility){
    document.getElementById("config-window").style.display = visbility;
    document.getElementById("config-set-lights").style.display = visbility;
    document.getElementById("config-set-labels-1").style.display = "none";
    

}

export function VisibilityComparisonWindow(visbility){
    document.getElementById("comparative-window").style.display = visbility;
}
//END flow control

//Methods to manage configuration sets
export function VisibilitySetBlades(visbility){
    document.getElementById("bttn-aspa-1").style.display = visbility;
    document.getElementById("bttn-aspa-2").style.display = visbility;
    document.getElementById("txt-aspa-1").style.display = visbility;
    document.getElementById("txt-aspa-2").style.display = visbility;
}
export function VisibilitySetMats(visbility){
    document.getElementById("bttn-material-1").style.display = visbility;
    document.getElementById("bttn-material-2").style.display = visbility;
    document.getElementById("bttn-material-3").style.display = visbility;
    document.getElementById("bttn-material-4").style.display = visbility;
    document.getElementById("txt-material-1").style.display = visbility;
    document.getElementById("txt-material-2").style.display = visbility;
    document.getElementById("txt-material-3").style.display = visbility;
    document.getElementById("txt-material-4").style.display = visbility;
}
export function VisibilitySetAnims(visbility){
    document.getElementById("bttn-anim-2").style.display = visbility;
    document.getElementById("bttn-anim-3").style.display = visbility;
    document.getElementById("txt-anim-2").style.display = visbility;
    document.getElementById("txt-anim-3").style.display = visbility;
}
export function VisibilitySetLights(visbility){
    document.getElementById("bttn-anim-1").style.display = visbility;
    document.getElementById("txt-anim-1").style.display = visbility;
}

export function IsConfigureBlades(){
    VisibilitySetBlades("inline");
    VisibilitySetMats("none");
    VisibilitySetAnims("none");

    isConfigureBlades = true;
    isConfigureMats = false;
    isConfigureAnims = false;

    //Update buttons
    document.getElementById("bttn-set-blade").style.backgroundColor = greenColor;
    document.getElementById("bttn-set-blade").style.color = blackFont;

    document.getElementById("bttn-set-mats").style.backgroundColor = blackColor;
    document.getElementById("bttn-set-mats").style.color = whitheFont;

    document.getElementById("bttn-set-anim").style.backgroundColor = blackColor;
    document.getElementById("bttn-set-anim").style.color = whitheFont;
    
    //camera
    SetCamera(cameraAspa);

    
}
export function IsConfigureMats(){
    VisibilitySetBlades("none");
    VisibilitySetMats("inline");
    VisibilitySetAnims("none");

    isConfigureBlades = false;
    isConfigureMats = true;
    isConfigureAnims = false;
    
    //Update buttons
    document.getElementById("bttn-set-blade").style.backgroundColor = blackColor;
    document.getElementById("bttn-set-blade").style.color = whitheFont;

    document.getElementById("bttn-set-mats").style.backgroundColor = greenColor;
    document.getElementById("bttn-set-mats").style.color = blackFont;

    document.getElementById("bttn-set-anim").style.backgroundColor = blackColor;
    document.getElementById("bttn-set-anim").style.color = whitheFont;

      //camera
      SetCamera(cameraPaint);
}
export function IsConfigureAnim(){
    VisibilitySetBlades("none");
    VisibilitySetMats("none");
    VisibilitySetAnims("inline");
    
    isConfigureBlades = false;
    isConfigureMats = false;
    isConfigureAnims = true;

    //Update buttons
    document.getElementById("bttn-set-blade").style.backgroundColor = blackColor;
    document.getElementById("bttn-set-blade").style.color = whitheFont;

    document.getElementById("bttn-set-mats").style.backgroundColor = blackColor;
    document.getElementById("bttn-set-mats").style.color = whitheFont;

    document.getElementById("bttn-set-anim").style.backgroundColor = greenColor;
    document.getElementById("bttn-set-anim").style.color = blackFont;

   //camera
   SetCamera(cameraConfig); 
}
export function isNothingConfigurable(){
    VisibilitySetBlades("none");
    VisibilitySetMats("none");
    VisibilitySetAnims("none");

    isConfigureBlades = false;
    isConfigureMats = false;
    isConfigureAnims = false;

    //Update buttons
    document.getElementById("bttn-set-blade").style.backgroundColor = blackColor;
    document.getElementById("bttn-set-blade").style.color = whitheFont;

    document.getElementById("bttn-set-mats").style.backgroundColor = blackColor;
    document.getElementById("bttn-set-mats").style.color = whitheFont;

    document.getElementById("bttn-set-anim").style.backgroundColor = blackColor;
    document.getElementById("bttn-set-anim").style.color = whitheFont;

    //camera
    SetCamera(cameraConfig);
}
