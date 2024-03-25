import { DCBlade1, DCBlade2, DOBlade1, DOBlade2 } from "./Blades.js";
import { SelectButtonOption, UnselectButtonOption } from "./Buttons.js";
import { icon_aspa1_off, icon_aspa1_on, icon_aspa2_off, icon_aspa2_on } from "./Icons.js";
import { disableAnimIDtimeout, drone_c_isBlade, drone_og_isBlade, enableBlade2IDtimeout, rootnode_drone } from "./main.js";

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