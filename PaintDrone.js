import { SelectButtonOption, UnselectButtonOption } from "./Buttons.js";
import { hull_ref, l_door_paint_ref, r_door_paint_ref } from "./main5.js";

export var paint_vermillon = 0;
export var paint_cobalt = 0;
export var paint_navy = 0;
export var paint_black = 0;

export var lights_on = 0;
export var lights_off = 0;
export var a_lights_on_mat = 0
export var a_lights_off_mat = 0


 //MATERIAL UUIDS
 export var id_paint_vermillon = '82c944e5-ad83-4101-aa91-c706b2776c68';
 export var id_paint_cobalt = '171d792f-f143-47eb-8d1c-78abe88a6414';
 export var id_paint_navy = '94ad0b7c-1c18-4223-9e45-e23cfd648a88';
 export var id_paint_black = 'aad2356e-0ea8-4fa5-b687-fc2ce2486e3d';

 export var id_light_on = '743ba67e-35fc-4e09-834e-71a72de5c27d';
 export var id_light_off = 'b32b52ea-0d49-474d-8c0c-f9a959a7299b';
 export var id_a_lights_on = 'e39d6e7f-814a-43ef-bdcb-7bda09e52d9c';
 export var id_a_lights_off = 'c919d6d0-46bc-48c6-ab98-32c16bba670a';

//mats
export var isVermillon = true;
export var isCobalt = false;
export var isNavy = false;
export var isBlack = false;

export async function SetMaterialsReferences(){
    //drone pain mats
    paint_vermillon = {value : id_paint_vermillon};
    paint_cobalt = {value : id_paint_cobalt};
    paint_navy = {value : id_paint_navy};
    paint_black = {value : id_paint_black};

    //lighs mats
    lights_off = {value : id_light_off};
    lights_on = {value : id_light_on};
    a_lights_on_mat = {value : id_a_lights_on};
    a_lights_off_mat = {value : id_a_lights_off};
}


//Methods to Manage Paint
function PaintIs(paintMat){
    hull_ref.setComponent('material_ref', paintMat);
    l_door_paint_ref.setComponent('material_ref', paintMat);
    r_door_paint_ref.setComponent('material_ref', paintMat);
}

export  function PaintIsVermillon(){
    PaintIs(paint_vermillon);

    SelectButtonOption("bttn-material-1","txt-material-1");
    UnselectButtonOption("bttn-material-2","txt-material-2");
    UnselectButtonOption("bttn-material-3","txt-material-3");
    UnselectButtonOption("bttn-material-4","txt-material-4");

    isVermillon = true;
    isCobalt = false;
    isNavy = false;
    isBlack = false;

    document.getElementById("txt-info-custom-paint").innerHTML = 'Paint: Vermillon';
}
export function PaintIsCobalt(){
    PaintIs(paint_cobalt);

    SelectButtonOption("bttn-material-2","txt-material-2");
    UnselectButtonOption("bttn-material-1","txt-material-1");
    UnselectButtonOption("bttn-material-3","txt-material-3");
    UnselectButtonOption("bttn-material-4","txt-material-4");

    isVermillon = false;
    isCobalt = true;
    isNavy = false;
    isBlack = false;

    document.getElementById("txt-info-custom-paint").innerHTML = 'Paint: Cobalt';
}
export function PaintIsNavy(){
    PaintIs(paint_navy);

    SelectButtonOption("bttn-material-3","txt-material-3");
    UnselectButtonOption("bttn-material-2","txt-material-2");
    UnselectButtonOption("bttn-material-1","txt-material-1");
    UnselectButtonOption("bttn-material-4","txt-material-4");

    isVermillon = false;
    isCobalt = false;
    isNavy = true;
    isBlack = false;

    document.getElementById("txt-info-custom-paint").innerHTML = 'Paint: Navy';

}

export function PaintIsBlack(){
    PaintIs(paint_black);

    SelectButtonOption("bttn-material-4","txt-material-4");
    UnselectButtonOption("bttn-material-2","txt-material-2");
    UnselectButtonOption("bttn-material-3","txt-material-3");
    UnselectButtonOption("bttn-material-1","txt-material-1");

    isVermillon = false;
    isCobalt = false;
    isNavy = false;
    isBlack = true;

    document.getElementById("txt-info-custom-paint").innerHTML = 'Paint: Black Pearl';
}