window.addEventListener("load", initApp);

var id_userToken = "public_kuDfbQ9HCvuT9o6a";
var id_sceneUUID = "beeb00a7-260a-4b74-8632-51a6fa88c0a4";

var id_userToken_emmar = "public_vScHJ9kJ5zjJBuWH";
var id_sceneUUID_emmar = "c9d32558-52d0-4db9-bd16-8ee3d954c7c8";


var screenTarget = 0;
var id_comedor = 0;
var status_comedor = true;
var mat_comedor = 0;


var mat_id_ls1marble = '74cdc027-a51d-4c38-ae9d-27ba39cf2d63';
var mat_id_diningtable5 = '1b6d4867-e18c-413e-ad91-6b9a1d7309a5';
var mat_ref_ls1marble = 0;
var mat_ref_diningtable5 = 0;


//Environment
var id_environment = '93990fef-4064-4324-940b-a6370ebcfd54';
var environment = 0;

var sky_original = '87d855f1-3d61-4936-bc33-e490cf5535a9';
var radiance_original = 'f04579cf-a8fa-4e16-a0b1-69c84994c462';
var irradiance_original = 'c87c9b43-fe0d-411d-95d8-c65ecfc63d84';

var sky_canary = '1d5af958-fa81-4b25-bf2d-25c6018df570';
var radiance_canary = '977ce761-e7d7-4b2d-ad50-6ad45854b235';
var irradiance_canary = '1166a906-8831-445d-b0f1-0b7075bb7133';


async function initApp() {

    await SDK3DVerse.joinOrStartSession({
        userToken: id_userToken_emmar,
        sceneUUID: id_sceneUUID_emmar,
        canvas: document.getElementById("display-canvas"),
        viewportProperties: {
            defaultControllerType: SDK3DVerse.controller_type.editor,
        },
        
        
    });

    SDK3DVerse.updateControllerSetting({
        speed: 0.05,
        sensivity: 0.05,
        damping: 0.65,
        angularDamping: 0.65,
        lookAtpoint: [0,0,0]
        
    });

    //const table = SDK3DVerse.engineAPI.getEntity(2116831720);
   // console.log("este es el rtid " + table);
    //const rootEntities = await SDK3DVerse.engineAPI.getRootEntities();
    



    // How to call an entity across UUID
    id_comedor = await SDK3DVerse.engineAPI.findEntitiesByEUID('9c0901f6-6097-4c6b-9a19-ac463bc09b3a');
    console.log('el id de mi comedor es', id_comedor);

    //How to get material component
    mat_comedor = id_comedor[0].getComponent('material_ref');
    console.log('mi material es' , mat_comedor);


    //how to get the types of all the components attached to the entity
    const componentTypes = id_comedor[0].getComponentTypes();
    console.log('comedor components', componentTypes);

    //set material ref
    mat_ref_ls1marble = {value : mat_id_ls1marble};
    mat_ref_diningtable5 = {value : mat_id_diningtable5};
    console.log('setes mis materiales' , mat_ref_diningtable5, mat_ref_ls1marble);

    //How to set environment
    environment = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_environment);
    console.log('mi environment es' , environment[0]);
    const componentTypesEnv = environment[0].getComponentTypes();
    console.log('environment components', componentTypesEnv);

    sky_canary = {value : '1d5af958-fa81-4b25-bf2d-25c6018df570'};
    radiance_canary = {value : '977ce761-e7d7-4b2d-ad50-6ad45854b235'};
    irradiance_canary = {value : '1166a906-8831-445d-b0f1-0b7075bb7133'};
    console.log('environment components',  sky_canary, radiance_canary, irradiance_canary);

}




// show and hide an entity
document.getElementById("bttn-hide").addEventListener('click', function (){
    if(status_comedor){
        id_comedor[0].setVisibility(false);
        status_comedor = false;
        console.log('apague mi comedor', id_comedor);
    }
    else if (!status_comedor){
        id_comedor[0].setVisibility(true);
        status_comedor = true;
        console.log('prendi mi comedor', id_comedor);
       // id_comedor[0].select();
    }
    
});

//Change Material of entity
document.getElementById("bttn-material").addEventListener('click',function(){

     id_comedor[0].setComponent('material_ref', mat_ref_ls1marble);
     console.log('cambie el material a', mat_ref_ls1marble);
});
document.getElementById("bttn-material-2").addEventListener('click',function(){

    id_comedor[0].setComponent('material_ref', mat_ref_diningtable5);
    console.log('cambie el material a', mat_ref_diningtable5);
});


/*
document.getElementById("bttn-env-original").addEventListener('click',function(){

    environment[0].setComponent('environment', {
    sky_original,
    radiance_original,
    irradiance_original,
    });

    console.log('cambie el skybox a shangai');
});
*/

document.getElementById("bttn-env-1").addEventListener('click',function(){

    environment[0].setComponent('environment', {
    sky_canary,
    radiance_canary,
    irradiance_canary,
    });
    SDK3DVerse.engineAPI.commitChanges();
    console.log('cambie el skybox a canary');
});



