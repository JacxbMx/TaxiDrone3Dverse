import { UnselectButtonOption } from "./Buttons.js";
import { icon_360_off, icon_hover_off } from "./Icons.js";
import { droneConfigurable, droneOriginal, rootnode_drone, stopDCanimIDtimeout1, stopDCanimIDtimeout2} from "./main.js";

//CONDITIONS 



//Methods to manage drone position visualization
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

