import {icon_light_on, icon_light_off } from "./Icons.js";
import {a_lights_off_mat, a_lights_on_mat, lights_off, lights_on } from "./PaintDrone.js";
import {whitheFont, greenColor} from './Colors.js';

 //DRONE LIGHT ENTITIES 
export var dc_f_lights_ref = 0;
export var dc_b_lights_ref = 0;
export var dc_a_lights_ref = [];

//DRONE LIGHT ENTITIES UUIDS
export var id_dc_f_lights = 'ee21662d-af4e-450f-99f5-2e13f2b42497';
export  var id_dc_b_lights = '';//change
export var id_dc_a_lights = ['9b051f33-8a70-474e-ab40-8b8272443915', '4b41f270-bd75-4d8c-a8f1-0eeca1792384', 'f37dfe32-5b74-4d7a-a58e-0e0b96c67949', '4fa1987f-ea28-4530-a556-bb8574343ceb','3d741380-014a-43f4-b442-7e23a38137ea',  '62ec45b3-1b22-483f-8cc8-94d196809ca6','401db2cf-9084-450a-9eb1-9d64f05a503e','e1494db7-82d2-4fe0-a36b-841c9e6ec513'] ;


//lights
export var isLight = false;

export async function GetLightEntities(){
       //Drone Lights entities
       dc_f_lights_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_dc_f_lights);
       dc_b_lights_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_dc_b_lights);
       GetEntityOfArray(id_dc_a_lights,dc_a_lights_ref);
}


async function GetEntityOfArray(idsArray, entityArray){
    for(let i = 0; i < idsArray.length; i++){
        var tempObject = await SDK3DVerse.engineAPI.findEntitiesByEUID(idsArray[i]);
        entityArray[i] = tempObject[0];
    }
}



export async function LightsOff(){
    //toggle front lights
    dc_f_lights_ref[0].setComponent('material_ref',lights_off);
    
    //toggle aspa lights
    for(let i = 0; i < dc_a_lights_ref.length; i++){
        dc_a_lights_ref[i].setComponent('material_ref',a_lights_off_mat);
    }

    isLight = false;


    document.getElementById("txt-anim-1").style.color = whitheFont;
    document.getElementById("bttn-anim-1").style.backgroundImage = icon_light_off;
}

export async function LightsOn(){
    //toggle front lights
    dc_f_lights_ref[0].setComponent('material_ref',lights_on);
    
    //toggle aspa lights
    for(let i = 0; i < dc_a_lights_ref.length; i++){
        dc_a_lights_ref[i].setComponent('material_ref',a_lights_on_mat);
    }

    isLight = true;


    document.getElementById("txt-anim-1").style.color = greenColor;
    document.getElementById("bttn-anim-1").style.backgroundImage = icon_light_on;
}

/*
//Methods to manage lights
export function ToggleLights(fLightsMat, aLightsMat, arrayBlade1Lights, statusLight,colorText, icon){
    //toggle front lights
    dc_f_lights_ref[0].setComponent('material_ref',fLightsMat);
    
    //toggle aspa lights
    for(let i = 0; i < arrayBlade1Lights.length; i++){
        arrayBlade1Lights[i].setComponent('material_ref',aLightsMat);
    }

    isLight = statusLight;


    document.getElementById("txt-anim-1").style.color = colorText;
    document.getElementById("bttn-anim-1").style.backgroundImage = icon;


}*/