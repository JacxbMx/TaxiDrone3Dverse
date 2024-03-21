 //BLADE 1 ENTITIES ARRAYS
 export var dc_aspa1_fl = []; 
 export var do_aspa1_fl = []; 
 export var dc_aspa1_fr = []; 
 export var do_aspa1_fr = [];
 export  var dc_aspa1_bl = [];
 export  var do_aspa1_bl = [];
 export  var dc_aspa1_br = [];
 export  var do_aspa1_br = [];

 //BLADE 2 ENTITIES ARRAYS
 export var dc_aspa2_fl = [];
 export  var do_aspa2_fl = [];
 export  var dc_aspa2_fr = [];
 export  var do_aspa2_fr = [];
 export  var dc_aspa2_bl = [];
 export  var do_aspa2_bl = [];
 export var dc_aspa2_br = [];
 export  var do_aspa2_br = [];

     //BLADE 1 ENTITIES UUID ARRAYS
     export var ids_aspa1_fl = ['f9e700e7-2277-4da9-a4c4-d68ca809bfc9','b2fc8449-3092-4082-8ea3-6a8dd5d2a8fa','0d10f6a2-538c-4198-9e59-05fc8a061957',
     '4b5abc7c-9a74-4399-9edd-6bce16961b46','a5fa9e18-836e-41ea-94ed-0fe91e02e365','3bd31df0-bc6f-4bab-bc16-62757bae59e8'];
export var ids_aspa1_fr = ['d1b736fd-7b38-46d2-8030-7b737a999263','0f5cb028-7013-4273-ac2b-046e62c6b2e3','e8954841-0a9b-4bb4-8933-c766f9d5753a',
     'e61f6789-d2e3-4ca1-8177-cc565d097bf5','378c72a2-7024-4cda-b6fb-40fc935c099a','7a3198a8-12d1-4422-89f2-e1abd41168c3'];
export var ids_aspa1_bl = ['2a43947f-d8ab-487a-b470-8dcb969df917','6f0232b7-f7b7-4ef3-86f8-17a00514b717','1c218d2b-71cd-4b34-ba63-fa5179a827c4',
     '5a94b8d6-8239-485c-b023-5567212910d8','9306b442-0329-4bc5-90ee-5b3a5c901496','f6e08b53-6787-4ea3-8f61-553147b3e6a8'];
export var ids_aspa1_br = ['7a8cdd85-90fa-47be-8aa4-605e9550207e','1a4e7dec-673f-44f8-822c-76dc8f1f6313','5cccf2f6-f770-4869-b8c8-2139388bdedd',
     '6bf16028-45ab-4d4d-a9fe-23af5a65d4be','a7b729fe-7fc6-48bc-80fa-78e143590a24','dab8349b-b8f5-44cd-9482-019ef0e71dd8'];

//BLADE 2 ENTITIES UUID ARRAYS
export var ids_aspa2_fl = ['8d959e06-03b6-40c0-bf6d-5a218a1968b8','95f7591a-0e4a-4bd5-a65c-a1b08dc65f78','27ae37b6-3376-4856-9022-48a946ee1847',
     'ade110a3-cdd0-4ee7-9571-18125dc90a1a','c5e25e18-4b9b-4559-a062-6bfd148e023a','76a851bf-d019-4e79-8d15-2e2349416b3d','df27759e-82f4-4681-86d1-5e6bf8579850'];
export var ids_aspa2_fr = ['9fc72588-3656-4498-8566-2b06e7e5e42a','8c196c82-f35a-4506-b7c1-44952582a654','4577b4a7-e753-46a8-bbba-ec7bdc733448',
     'd867f184-3d48-4f5b-8180-7fc3966c18c2','70433b7b-08c7-4908-9f9e-5db840b07a0c','ab750b8e-0366-448f-855e-7801902ec9d1','38744c82-fc27-467f-b4b3-de0a3c73e762'];
export var ids_aspa2_bl = ['36fbe59b-3a5b-4925-b263-b9eb89123283','f7671733-88b9-488e-8704-c6022a50b1dc','94132a13-221b-4d8a-8be8-896279edcf1c',
     '7e89d961-e558-4f49-9d8b-30e217497359','63406ca6-0a07-4488-9942-7f6f52d3688b','0ee33f56-ed59-48f9-8f35-4865f2da9809','c4049315-94e2-40cd-b282-05ce8794754b'];
export var ids_aspa2_br = ['a404a4c3-edb8-4b17-97d2-40547abe5e22','9aafadca-b109-4791-9dec-1aa9eb46f80a','a8008ba0-d63c-4274-9992-0b4fba7fd890',
     '9fbefb1c-54b3-4fa1-bf6a-3553e7015603','8ed1db11-dcee-45fd-8016-610a7ccbb6db','87c1bec2-f2f5-4e59-8293-0877b85f8194','c84e6163-a3e6-4c04-b821-5526df09c3d2'];


//Get Blades Entities
async function GetBlades(idsArray, dcArray, doArray){
    for(let i = 0; i < idsArray.length; i++){
        var tempObject = await SDK3DVerse.engineAPI.findEntitiesByEUID(idsArray[i]);
        dcArray[i] = tempObject[0];
        doArray[i] = tempObject[1];
    }
}

export async function GetAllBlades(){
 GetBlades(ids_aspa1_fl,dc_aspa1_fl,do_aspa1_fl);//Set BLADE 1 FL
 GetBlades(ids_aspa1_fr,dc_aspa1_fr,do_aspa1_fr);//Set BLADE 1 FR
 GetBlades(ids_aspa1_bl,dc_aspa1_bl,do_aspa1_bl);//Set BLADE 1 BL
 GetBlades(ids_aspa1_br,dc_aspa1_br,do_aspa1_br);//Set BLADE 1 BR
 GetBlades(ids_aspa2_fl,dc_aspa2_fl,do_aspa2_fl);//Set BLADE 2 FL
 GetBlades(ids_aspa2_fr,dc_aspa2_fr,do_aspa2_fr);//Set BLADE 2 FR
 GetBlades(ids_aspa2_bl,dc_aspa2_bl,do_aspa2_bl);//Set BLADE 2 BL
 GetBlades(ids_aspa2_br,dc_aspa2_br,do_aspa2_br);//Set BLADE 2 BR
}

//Set Visibility Blades
async function SetVisibilityBlades(entityArray, visibility){
    for(let i = 0; i < entityArray.length; i++){
        entityArray[i].setVisibility(visibility);
    }
}
async function SetVisibilityBlades2(entityArray, entitiyArray2, visibility){
    for(let i = 0; i < entityArray.length; i++){
        entityArray[i].setVisibility(visibility);
        entitiyArray2[i].setVisibility(visibility);
    }
}

export async function DOBlade1(){
    SetVisibilityBlades(do_aspa1_fl, true);
    SetVisibilityBlades(do_aspa1_fr, true);
    SetVisibilityBlades(do_aspa1_bl, true);
    SetVisibilityBlades(do_aspa1_br, true);
    SetVisibilityBlades(do_aspa2_fl, false);
    SetVisibilityBlades(do_aspa2_fr, false);
    SetVisibilityBlades(do_aspa2_bl, false);
    SetVisibilityBlades(do_aspa2_br, false);
}
export async function DOBlade2(){
    SetVisibilityBlades(do_aspa1_fl, false);
    SetVisibilityBlades(do_aspa1_fr, false);
    SetVisibilityBlades(do_aspa1_bl, false);
    SetVisibilityBlades(do_aspa1_br, false);
    SetVisibilityBlades(do_aspa2_fl, true);
    SetVisibilityBlades(do_aspa2_fr, true);
    SetVisibilityBlades(do_aspa2_bl, true);
    SetVisibilityBlades(do_aspa2_br, true);
}
export async function DCBlade1(){
    SetVisibilityBlades(dc_aspa1_fl, true);
    SetVisibilityBlades(dc_aspa1_fr, true);
    SetVisibilityBlades(dc_aspa1_bl, true);
    SetVisibilityBlades(dc_aspa1_br, true);
    SetVisibilityBlades(dc_aspa2_fl, false);
    SetVisibilityBlades(dc_aspa2_fr, false);
    SetVisibilityBlades(dc_aspa2_bl, false);
    SetVisibilityBlades(dc_aspa2_br, false);
}
export async function DCBlade2(){
    SetVisibilityBlades(dc_aspa1_fl, false);
    SetVisibilityBlades(dc_aspa1_fr, false);
    SetVisibilityBlades(dc_aspa1_bl, false);
    SetVisibilityBlades(dc_aspa1_br, false);
    SetVisibilityBlades(dc_aspa2_fl, true);
    SetVisibilityBlades(dc_aspa2_fr, true);
    SetVisibilityBlades(dc_aspa2_bl, true);
    SetVisibilityBlades(dc_aspa2_br, true);
}