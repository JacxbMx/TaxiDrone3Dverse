window.addEventListener("load", initApp);

var id_userToken = "public_kuDfbQ9HCvuT9o6a";
var id_sceneUUID = "beeb00a7-260a-4b74-8632-51a6fa88c0a4";

var id_userToken_emmar = "public_vScHJ9kJ5zjJBuWH";
var id_sceneUUID_emmar = "c9d32558-52d0-4db9-bd16-8ee3d954c7c8";


var screenTarget = 0;
var id_comedor = 0;
var status_comedor = true;

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

    // obtener entidad referenciandola con el 
    id_comedor = await SDK3DVerse.engineAPI.findEntitiesByEUID('9c0901f6-6097-4c6b-9a19-ac463bc09b3a');
    console.log('el id de mi comedor es'+ id_comedor);
    
}





document.getElementById("bttn-option-1").addEventListener('click', function (){
    if(status_comedor){
        id_comedor[0].setVisibility(false);
        status_comedor = false;
        console.log('apague mi comedor'+ id_comedor);
    }
    else if (!status_comedor){
        id_comedor[0].setVisibility(true);
        status_comedor = true;
        console.log('prendi mi comedor'+ id_comedor);
       // id_comedor[0].select();
    }
    
});