window.addEventListener("load", initApp);


import {id_publicToken, id_sceneUUID} from './template.js';

import {GetCameras} from './Cameras.js';
import {GetAllBlades, DOBlade1, DOBlade2, DCBlade1, DCBlade2 } from './Blades.js';
import {icon_360_off, icon_360_on, icon_aspa1_off, icon_aspa1_on, icon_aspa2_off, icon_aspa2_on, icon_hover_off, icon_hover_on} from './Icons.js';
import {whitheFont, greenColor, whiteColor, blackColor, blackFont} from './Colors.js';
import {SetMaterialsReferences, PaintIsVermillon, PaintIsCobalt, PaintIsNavy, PaintIsBlack} from './PaintDrone.js';
import {GetLightEntities, LightsOff, LightsOn, isLight} from './LightsDrone.js';
import { SelectButtonOption, UnselectButtonOption } from "./Buttons.js";
import { IntitUI, ConfigWindow, WelcomeWindow, ComparativeWindow, IsConfigureBlades, IsConfigureMats, IsConfigureAnim, VisibilitySetLights, isConfigureBlades, isConfigureMats,isConfigureAnims, isNothingConfigurable} from './UI.js';

    //CONDITIONS 
        //Animations
        var drone_c_isAnimation = 0;
        var drone_og_isAnimation = 1;

        //Blades
        var drone_c_isBlade = 1;
        var drone_og_isBlade = 1;

       

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
        userToken: id_publicToken,
        sceneUUID: id_sceneUUID,
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



//Header Buttons
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


//Buttons Options Set
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


//Buttons Paint Options
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


//Button Light Option
document.getElementById("bttn-anim-1").addEventListener('click', function(){
    if(isLight){
        LightsOff();
    }
    else if(!isLight){
        LightsOn();
    }
});




//Methods to manage drone visualization
export function InitDroneVisualization(){
    
    droneOriginal.setGlobalTransform({position : [0,0,0]});
    droneConfigurable.setGlobalTransform({position : [0,0,0]});


    droneOriginal.setVisibility(true);
    droneConfigurable.setVisibility(false);
}

export function ConfigDroneVisualization(){

    droneOriginal.setGlobalTransform({position : [0,0,0]});
    droneConfigurable.setGlobalTransform({position : [0,0,0]});

    droneOriginal.setVisibility(false);
    droneConfigurable.setVisibility(true);
}

export function ComparativeDroneVisualization(){

    droneOriginal.setGlobalTransform({position : [-2.5,0,0]});
    droneConfigurable.setGlobalTransform({position : [2.5,0,0]});


    droneOriginal.setVisibility(true);
    droneConfigurable.setVisibility(true);

}




//Buttons Movement options
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
export function StartDOHover(){
    rootnode_drone[1].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : true, isChange : false, no360 : true, noHover : false, noChange : false}});

}
export function StopDOAnim(){
    rootnode_drone[1].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : false, isChange : false, no360 : true, noHover : true, noChange : true}});
}
export function StartDO360(){
    rootnode_drone[1].setComponent('animation_controller',{ dataJSON: {  is360 : true, isHover : false, isChange : false, no360 : false, noHover : false, noChange : false}});
}

export function StopDCAnim(){
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

export function StartDCHover(){
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

export function StartDC360(){
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



//Buttons Propelers Options
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


export function DroneCustomWhichBladeIs(){
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

export function DroneOgWhichBladeIs(){
    switch (drone_og_isBlade){
        case 1:
            DOBlade1();
            break;
        case 2:
            DOBlade2();
            break;
    }
}

export function StartBladeChange(){
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

export function StopBladeChange(){
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






