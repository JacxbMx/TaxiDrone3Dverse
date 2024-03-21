window.addEventListener("load", initApp);


import * as template from './template.js';

import { GetCameras, SetCamera, cameraAspa, cameraComparative, cameraConfig, cameraPaint, cameraWelcome } from './Cameras.js';
import {GetAllBlades, DOBlade1, DOBlade2, DCBlade1, DCBlade2 } from './Blades.js';
import {icon_360_off, icon_360_on, icon_aspa1_off, icon_aspa1_on, icon_aspa2_off, icon_aspa2_on, icon_hover_off, icon_hover_on} from './Icons.js';
import {whitheFont, greenColor, whiteColor, blackColor, blackFont} from './Colors.js';
import {SetMaterialsReferences, PaintIsVermillon, PaintIsCobalt, PaintIsNavy, PaintIsBlack} from './PaintDrone.js';
import {GetLightEntities, LightsOff, LightsOn, isLight} from './LightsDrone.js';
import { SelectButtonOption, UnselectButtonOption } from "./Buttons.js";

    //CONDITIONS 
        //Animations
        var drone_c_isAnimation = 0;
        var drone_og_isAnimation = 1;

       

        //Blades
        var drone_c_isBlade = 1;
        var drone_og_isBlade = 1;

        //button sets
        var isConfigureBlades = false;
        var isConfigureMats = false;
        var isConfigureAnims = false;

    var stopDCanimIDtimeout1 = 0;
    var stopDCanimIDtimeout2 = 0;

    var enableBlade2IDtimeout = 0;
    var disableAnimIDtimeout = 0;
       
    export var rootnode_drone = 0;

    //DRONES ENTITIES
    export var droneConfigurable = 0;
    export var droneOriginal = 0;
    
    //HULL ENTITIES
    export var hull_ref = 0;
    export var l_door_paint_ref = 0;
    export var r_door_paint_ref = 0;
     
    //DRONE ENTITIY ROOT NODE UUID
    export var id_rootnode_drone = '1c6fcba4-75db-4e88-a02a-130c25e368d8';
    
    //DRONES ENTITIES UUID
    export var id_droneConfigurable = '19119c4c-bea5-4ffb-81a0-c98b6e6533fa';
    export var id_droneOriginal = '22cfb5af-ebc8-4cff-9259-9e06f3062d70';
    
    //HULL ENTITIES UUIDS
    export var id_hull = 'bdc0e85d-06dc-4f35-9da7-5f18b05b416b';
    export var id_l_door_paint = 'e88fb3f7-e946-48dc-9e17-a70fc821334a';
    export var id_r_door_paint = '708cc5aa-f903-4d42-8dce-0a12e633e029';


async function initApp() {

    await SDK3DVerse.joinOrStartSession({
        userToken: template.id_publicToken,
        sceneUUID: template.id_sceneUUID,
        canvas: document.getElementById("display-canvas"),
        viewportProperties: {
            defaultControllerType: SDK3DVerse.controller_type.orbit,
        },
        
        
    });

    GetAllBlades();
      
    GetCameras();
   // GetDroneEntities();
    GetLightEntities();
    SetMaterialsReferences();
    IntitUI();

    SDK3DVerse.updateControllerSetting({
        speed: 0.05,
        sensivity: 0.05,
        damping: 0.65,
        angularDamping: 0.65,
        lookAtpoint: [0,0,0]
        
    });

     //Drone rootnode entity
     rootnode_drone = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_rootnode_drone);
    
     //Drone entities
     var tempdroneConfigurable = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_droneConfigurable);
     droneConfigurable = tempdroneConfigurable[0];
     var tempdroneOriginal = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_droneOriginal);
     droneOriginal = tempdroneOriginal[0];
 
     //Hull entities
     var temphull_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_hull);
     hull_ref = temphull_ref[0];
     var templ_door_paint_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_l_door_paint);
     l_door_paint_ref = templ_door_paint_ref[0];
     var tempr_door_paint_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_r_door_paint);
     r_door_paint_ref = tempr_door_paint_ref[0];
    

    document.getElementById("bttn-go-Welcome").style.color = greenColor;
    document.getElementById("bttn-go-Config").style.color = whitheFont;
    document.getElementById("bttn-go-Comparison").style.color = whitheFont;
    
    DefaultConfig();

}

//Default config of drone
function DefaultConfig(){
    PaintIsVermillon();
    LightsOff();
    InitDroneVisualization();
    StopDOAnim();
    StartDOHover();
    StopDCAnim();
    DOBlade1();
    
}

function IntitUI(){
    //Set started visualization of UI
    VisbilityWelcomeWindow("flex");
    VisibilityConfigurationWindow("none");
    VisibilityComparisonWindow("none");
}

//Flow  control of configurator windows

//go to config
document.getElementById("bttn-go-Config").addEventListener('click', function(){
    ConfigWindow();
});
document.getElementById("bttn-start").addEventListener('click', function(){
    ConfigWindow();
});
document.getElementById("bttn-start-1").addEventListener('click', function(){
    ConfigWindow();
});

//go to welcome
document.getElementById("bttn-go-Welcome").addEventListener('click', function(){
    WelcomeWindow();
});

//go tocomparison
document.getElementById("bttn-go-Comparison").addEventListener('click', function(){
   ComparativeWindow();
});




function WelcomeWindow(){
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
function ConfigWindow(){
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
function ComparativeWindow(){
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
function VisbilityWelcomeWindow(visbility){
    document.getElementById("welcome-window").style.display = visbility;
    document.getElementById("start-button").style.display = visbility;
}

function VisibilityConfigurationWindow(visbility){
    document.getElementById("config-window").style.display = visbility;
    document.getElementById("config-set-lights").style.display = visbility;
    document.getElementById("config-set-labels-1").style.display = "none";
    

}

function VisibilityComparisonWindow(visbility){
    document.getElementById("comparative-window").style.display = visbility;
}
//END flow control

document.getElementById("bttn-set-blade").addEventListener('click', function(){

    if(!isConfigureBlades){
        IsConfigureBlades();
        VisibilitySetLights("none");
    }else if (isConfigureBlades){
        isNothingConfigurable();
        VisibilitySetLights("inline");
    }
});
document.getElementById("bttn-set-mats").addEventListener('click', function(){

    if(!isConfigureMats){
        IsConfigureMats();
        VisibilitySetLights("none");
    }else if (isConfigureMats){
        isNothingConfigurable();
        VisibilitySetLights("inline");
    }
});
document.getElementById("bttn-set-anim").addEventListener('click', function(){
    if(!isConfigureAnims){
        IsConfigureAnim();
        VisibilitySetLights("none");
    }else if(isConfigureAnims){
        isNothingConfigurable();
        VisibilitySetLights("inline");
    }
});


//Methods to manage configuration sets
function VisibilitySetBlades(visbility){
    document.getElementById("bttn-aspa-1").style.display = visbility;
    document.getElementById("bttn-aspa-2").style.display = visbility;
    document.getElementById("txt-aspa-1").style.display = visbility;
    document.getElementById("txt-aspa-2").style.display = visbility;
}
function VisibilitySetMats(visbility){
    document.getElementById("bttn-material-1").style.display = visbility;
    document.getElementById("bttn-material-2").style.display = visbility;
    document.getElementById("bttn-material-3").style.display = visbility;
    document.getElementById("bttn-material-4").style.display = visbility;
    document.getElementById("txt-material-1").style.display = visbility;
    document.getElementById("txt-material-2").style.display = visbility;
    document.getElementById("txt-material-3").style.display = visbility;
    document.getElementById("txt-material-4").style.display = visbility;
}
function VisibilitySetAnims(visbility){
    document.getElementById("bttn-anim-2").style.display = visbility;
    document.getElementById("bttn-anim-3").style.display = visbility;
    document.getElementById("txt-anim-2").style.display = visbility;
    document.getElementById("txt-anim-3").style.display = visbility;
}
function VisibilitySetLights(visbility){
    document.getElementById("bttn-anim-1").style.display = visbility;
    document.getElementById("txt-anim-1").style.display = visbility;
}

function IsConfigureBlades(){
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
function IsConfigureMats(){
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
function IsConfigureAnim(){
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
function isNothingConfigurable(){
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

//Config Material Paint Drone
document.getElementById("bttn-material-1").addEventListener('click', function(){
    PaintIsVermillon();
});
document.getElementById("bttn-material-2").addEventListener('click', function(){
    PaintIsCobalt();
});
document.getElementById("bttn-material-3").addEventListener('click', function(){
    PaintIsNavy();
});
document.getElementById("bttn-material-4").addEventListener('click', function(){
    PaintIsBlack();
});




//Config Lights Drone
document.getElementById("bttn-anim-1").addEventListener('click', function(){
    if(isLight){
        LightsOff();
    }
    else if(!isLight){
        LightsOn();
    }
});




//Methods to manage drone visualization
function InitDroneVisualization(){
    
    droneOriginal.setGlobalTransform({position : [0,0,0]});
    droneConfigurable.setGlobalTransform({position : [0,0,0]});


    droneOriginal.setVisibility(true);
    droneConfigurable.setVisibility(false);
}

function ConfigDroneVisualization(){

    droneOriginal.setGlobalTransform({position : [0,0,0]});
    droneConfigurable.setGlobalTransform({position : [0,0,0]});

    droneOriginal.setVisibility(false);
    droneConfigurable.setVisibility(true);
}

function ComparativeDroneVisualization(){

    droneOriginal.setGlobalTransform({position : [-2.5,0,0]});
    droneConfigurable.setGlobalTransform({position : [2.5,0,0]});


    droneOriginal.setVisibility(true);
    droneConfigurable.setVisibility(true);

}




//Config anim
document.getElementById("bttn-anim-2").addEventListener('click', function(){
    if(drone_c_isAnimation != 1){
        SelectButtonOption("bttn-anim-2","txt-anim-2");
        UnselectButtonOption("bttn-anim-3","txt-anim-3");
        document.getElementById("bttn-anim-2").style.backgroundImage = icon_hover_on;
        document.getElementById("bttn-anim-3").style.backgroundImage = icon_360_off;

        StartDCHover();

        stopDCanimIDtimeout1 = setTimeout(StopDCAnim, 16000);
        
        drone_c_isAnimation = 1;
    }else if (drone_c_isAnimation == 1){
        
        StopDCAnim();

        drone_c_isAnimation = 0;
    }
    
   
});
document.getElementById("bttn-anim-3").addEventListener('click', function(){
    if(drone_c_isAnimation != 2){
        SelectButtonOption("bttn-anim-3","txt-anim-3");
        UnselectButtonOption("bttn-anim-2","txt-anim-2");
        document.getElementById("bttn-anim-3").style.backgroundImage = icon_360_on;
        document.getElementById("bttn-anim-2").style.backgroundImage = icon_hover_off;

        StartDC360();
       
        stopDCanimIDtimeout2 = setTimeout(StopDCAnim, 16000);

        drone_c_isAnimation = 2;
    }else if (drone_c_isAnimation == 2){
        
        StopDCAnim();
        drone_c_isAnimation = 0;
    }
    
});
//Methods to anim
function StartDOHover(){
    rootnode_drone[1].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : true, isChange : false, no360 : true, noHover : false, noChange : false}});

}
function StopDOAnim(){
    rootnode_drone[1].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : false, isChange : false, no360 : true, noHover : true, noChange : true}});
}
function StartDO360(){
    rootnode_drone[1].setComponent('animation_controller',{ dataJSON: {  is360 : true, isHover : false, isChange : false, no360 : false, noHover : false, noChange : false}});
}

function StopDCAnim(){
    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : false, isChange : false, no360 : true, noHover : true, noChange : false}});

    //Enable other options
    document.getElementById("bttn-anim-2").style.pointerEvents = "auto";
    document.getElementById("bttn-anim-3").style.pointerEvents = "auto";
    document.getElementById("bttn-set-blade").style.pointerEvents = "auto";
    document.getElementById("bttn-set-mats").style.pointerEvents = "auto";
    document.getElementById("bttn-set-anim").style.pointerEvents = "auto"; 

    //enable flow windows
    document.getElementById("bttn-go-Welcome").style.pointerEvents = "auto";
    document.getElementById("bttn-go-Config").style.pointerEvents = "none";
    document.getElementById("bttn-go-Comparison").style.pointerEvents = "auto";

    //Update buttons
    UnselectButtonOption("bttn-anim-2","txt-anim-2");
    UnselectButtonOption("bttn-anim-3","txt-anim-3");
    document.getElementById("bttn-anim-2").style.backgroundImage = icon_hover_off;
    document.getElementById("bttn-anim-3").style.backgroundImage = icon_360_off;

    clearTimeout(stopDCanimIDtimeout1);
    clearTimeout(stopDCanimIDtimeout2);
    
}

function StartDCHover(){
    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : true, isChange : false, no360 : true, noHover : false, noChange : false}});

    //Disable other options
    document.getElementById("bttn-anim-2").style.pointerEvents = "auto";
    document.getElementById("bttn-anim-3").style.pointerEvents = "none";
    document.getElementById("bttn-set-blade").style.pointerEvents = "none";
    document.getElementById("bttn-set-mats").style.pointerEvents = "none";
    document.getElementById("bttn-set-anim").style.pointerEvents = "none";

    //Disable flow windows
    document.getElementById("bttn-go-Welcome").style.pointerEvents = "none";
    document.getElementById("bttn-go-Config").style.pointerEvents = "none";
    document.getElementById("bttn-go-Comparison").style.pointerEvents = "none";

}

function StartDC360(){
    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : true, isHover : false, isChange : false, no360 : false, noHover : false, noChange : false}});
    //Disable other options
    document.getElementById("bttn-anim-2").style.pointerEvents = "none";
    document.getElementById("bttn-anim-3").style.pointerEvents = "auto";
    document.getElementById("bttn-set-blade").style.pointerEvents = "none";
    document.getElementById("bttn-set-mats").style.pointerEvents = "none";
    document.getElementById("bttn-set-anim").style.pointerEvents = "none";
    //Disable flow windows
    document.getElementById("bttn-go-Welcome").style.pointerEvents = "none";
    document.getElementById("bttn-go-Config").style.pointerEvents = "none";
    document.getElementById("bttn-go-Comparison").style.pointerEvents = "none";
}



////// BLADES CONFIGURATION /////
document.getElementById("bttn-aspa-1").addEventListener('click', function(){
    if(drone_c_isBlade != 1){
        SelectButtonOption("bttn-aspa-1","txt-aspa-1");
        UnselectButtonOption("bttn-aspa-2","txt-aspa-2");
        document.getElementById("bttn-aspa-1").style.backgroundImage = icon_aspa1_on;
        document.getElementById("bttn-aspa-2").style.backgroundImage = icon_aspa2_off;

        StartBladeChange();
        enableBlade2IDtimeout = setTimeout(DCBlade1,4000);
        disableAnimIDtimeout = setTimeout(StopBladeChange,10000);
        
        drone_c_isBlade = 1;
    }else{
        return;
    }

    document.getElementById("txt-info-custom-blade").innerHTML = 'Propellers: SK1028';
});
document.getElementById("bttn-aspa-2").addEventListener('click', function(){
    if(drone_c_isBlade != 2){
        SelectButtonOption("bttn-aspa-2","txt-aspa-2");
        UnselectButtonOption("bttn-aspa-1","txt-aspa-1");
        document.getElementById("bttn-aspa-2").style.backgroundImage = icon_aspa2_on;
        document.getElementById("bttn-aspa-1").style.backgroundImage = icon_aspa1_off;
    
        StartBladeChange();
        enableBlade2IDtimeout = setTimeout(DCBlade2,4000);
        disableAnimIDtimeout = setTimeout(StopBladeChange,10000);
       
        drone_c_isBlade = 2;
    }else{
        return;
    }
    
    document.getElementById("txt-info-custom-blade").innerHTML = 'Propellers: SQ302';
});


async function DroneCustomWhichBladeIs(){
    switch (drone_c_isBlade){
        case 1:
            SelectButtonOption("bttn-aspa-1","txt-aspa-1");
            UnselectButtonOption("bttn-aspa-2","txt-aspa-2");
            document.getElementById("bttn-aspa-1").style.backgroundImage = icon_aspa1_on;
            document.getElementById("bttn-aspa-2").style.backgroundImage = icon_aspa2_off;
            DCBlade1();
            break;
        case 2:
            SelectButtonOption("bttn-aspa-2","txt-aspa-2");
            UnselectButtonOption("bttn-aspa-1","txt-aspa-1");
            document.getElementById("bttn-aspa-2").style.backgroundImage = icon_aspa2_on;
            document.getElementById("bttn-aspa-1").style.backgroundImage = icon_aspa1_off;
            DCBlade2();
            break;
    }
}

async function DroneOgWhichBladeIs(){
    switch (drone_og_isBlade){
        case 1:
            DOBlade1();
            break;
        case 2:
            DOBlade2();
            break;
    }
}

function StartBladeChange(){
    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : false, isChange : true, no360 : false, noHover : false, noChange : false}});

    //Disable other options9
    document.getElementById("bttn-aspa-1").style.pointerEvents = "none";
    document.getElementById("bttn-aspa-2").style.pointerEvents = "none";
    document.getElementById("bttn-set-blade").style.pointerEvents = "none";
    document.getElementById("bttn-set-mats").style.pointerEvents = "none";
    document.getElementById("bttn-set-anim").style.pointerEvents = "none";

    //Disable flow windows
    document.getElementById("bttn-go-Welcome").style.pointerEvents = "none";
    document.getElementById("bttn-go-Config").style.pointerEvents = "none";
    document.getElementById("bttn-go-Comparison").style.pointerEvents = "none";
}

function StopBladeChange(){
    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : false, isChange : false, no360 : false, noHover : false, noChange : true}});

    //Enable other options
    document.getElementById("bttn-aspa-1").style.pointerEvents = "auto";
    document.getElementById("bttn-aspa-2").style.pointerEvents = "auto";
    document.getElementById("bttn-set-blade").style.pointerEvents = "auto";
    document.getElementById("bttn-set-mats").style.pointerEvents = "auto";
    document.getElementById("bttn-set-anim").style.pointerEvents = "auto"; 

    //enable flow windows
    document.getElementById("bttn-go-Welcome").style.pointerEvents = "auto";
    document.getElementById("bttn-go-Config").style.pointerEvents = "none";
    document.getElementById("bttn-go-Comparison").style.pointerEvents = "auto";

    clearTimeout(enableBlade2IDtimeout);
    clearTimeout(disableAnimIDtimeout);
}






