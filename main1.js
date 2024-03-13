window.addEventListener("load", initApp);


//ENTITIES
    //ANIMATION: ROOT NODE DRONE ENTITIY 
    var rootnode_drone = 0;

    //DRONES ENTITIES
    var droneConfigurable = 0;
    var droneOriginal = 0;

    //BLADE 1 ENTITIES ARRAYS
    var dc_aspa1_fl = [];var do_aspa1_fl = [];var dc_aspa1_fr = [];var do_aspa1_fr = [];var dc_aspa1_bl = [];var do_aspa1_bl = [];var dc_aspa1_br = [];var do_aspa1_br = [];

    //BLADE 2 ENTITIES ARRAYS
    var dc_aspa2_fl = [];var do_aspa2_fl = [];var dc_aspa2_fr = [];var do_aspa2_fr = [];var dc_aspa2_bl = [];var do_aspa2_bl = [];var dc_aspa2_br = [];var do_aspa2_br = [];

    //CAMERAS ENTITIES
    var cameraWelcome = 0;
    var cameraConfig = 0;
    var cameraComparative = 0;
    var cameraAspa = 0;
    var cameraPaint = 0;
    
    //MATERIAL REFERENCES
    var paint_vermillon = 0;
    var paint_cobalt = 0;
    var paint_navy = 0;
    var paint_black = 0;
    var lights_on = 0;
    var lights_off = 0;
    var a_lights_on_mat = 0
    var a_lights_off_mat = 0
  
    
    //HULL ENTITIES
    var hull_ref = 0;
    var l_door_paint_ref = 0;
    var r_door_paint_ref = 0;

    //DRONE LIGHT ENTITIES 
    var dc_f_lights_ref = 0;
    var dc_b_lights_ref = 0;
    var dc_a_lights_ref = [];
    

//UUIDS
    //PUBLIC TOKEN AND SCENE UUID
    var id_publicToken = "public_sjrncx7uplCXGACl";
    var id_sceneUUID = "32b83e58-b5f6-4f5f-89b3-e38bdcac574c";

    //DRONE ENTITIY ROOT NODE UUID
    var id_rootnode_drone = '1c6fcba4-75db-4e88-a02a-130c25e368d8';

    //DRONES ENTITIES UUID
    var id_droneConfigurable = '19119c4c-bea5-4ffb-81a0-c98b6e6533fa';
    var id_droneOriginal = '22cfb5af-ebc8-4cff-9259-9e06f3062d70';

    //BLADE 1 ENTITIES UUID ARRAYS
    var ids_aspa1_fl = ['f9e700e7-2277-4da9-a4c4-d68ca809bfc9','b2fc8449-3092-4082-8ea3-6a8dd5d2a8fa','0d10f6a2-538c-4198-9e59-05fc8a061957',
                        '4b5abc7c-9a74-4399-9edd-6bce16961b46','a5fa9e18-836e-41ea-94ed-0fe91e02e365','3bd31df0-bc6f-4bab-bc16-62757bae59e8'];
    var ids_aspa1_fr = ['d1b736fd-7b38-46d2-8030-7b737a999263','0f5cb028-7013-4273-ac2b-046e62c6b2e3','e8954841-0a9b-4bb4-8933-c766f9d5753a',
                        'e61f6789-d2e3-4ca1-8177-cc565d097bf5','378c72a2-7024-4cda-b6fb-40fc935c099a','7a3198a8-12d1-4422-89f2-e1abd41168c3'];
    var ids_aspa1_bl = ['2a43947f-d8ab-487a-b470-8dcb969df917','6f0232b7-f7b7-4ef3-86f8-17a00514b717','1c218d2b-71cd-4b34-ba63-fa5179a827c4',
                        '5a94b8d6-8239-485c-b023-5567212910d8','9306b442-0329-4bc5-90ee-5b3a5c901496','f6e08b53-6787-4ea3-8f61-553147b3e6a8'];
    var ids_aspa1_br = ['7a8cdd85-90fa-47be-8aa4-605e9550207e','1a4e7dec-673f-44f8-822c-76dc8f1f6313','5cccf2f6-f770-4869-b8c8-2139388bdedd',
                        '6bf16028-45ab-4d4d-a9fe-23af5a65d4be','a7b729fe-7fc6-48bc-80fa-78e143590a24','dab8349b-b8f5-44cd-9482-019ef0e71dd8'];

    //BLADE 2 ENTITIES UUID ARRAYS
    var ids_aspa2_fl = ['8d959e06-03b6-40c0-bf6d-5a218a1968b8','95f7591a-0e4a-4bd5-a65c-a1b08dc65f78','27ae37b6-3376-4856-9022-48a946ee1847',
                        'ade110a3-cdd0-4ee7-9571-18125dc90a1a','c5e25e18-4b9b-4559-a062-6bfd148e023a','76a851bf-d019-4e79-8d15-2e2349416b3d','df27759e-82f4-4681-86d1-5e6bf8579850'];
    var ids_aspa2_fr = ['9fc72588-3656-4498-8566-2b06e7e5e42a','8c196c82-f35a-4506-b7c1-44952582a654','4577b4a7-e753-46a8-bbba-ec7bdc733448',
                        'd867f184-3d48-4f5b-8180-7fc3966c18c2','70433b7b-08c7-4908-9f9e-5db840b07a0c','ab750b8e-0366-448f-855e-7801902ec9d1','38744c82-fc27-467f-b4b3-de0a3c73e762'];
    var ids_aspa2_bl = ['36fbe59b-3a5b-4925-b263-b9eb89123283','f7671733-88b9-488e-8704-c6022a50b1dc','94132a13-221b-4d8a-8be8-896279edcf1c',
                        '7e89d961-e558-4f49-9d8b-30e217497359','63406ca6-0a07-4488-9942-7f6f52d3688b','0ee33f56-ed59-48f9-8f35-4865f2da9809','c4049315-94e2-40cd-b282-05ce8794754b'];
    var ids_aspa2_br = ['a404a4c3-edb8-4b17-97d2-40547abe5e22','9aafadca-b109-4791-9dec-1aa9eb46f80a','a8008ba0-d63c-4274-9992-0b4fba7fd890',
                        '9fbefb1c-54b3-4fa1-bf6a-3553e7015603','8ed1db11-dcee-45fd-8016-610a7ccbb6db','87c1bec2-f2f5-4e59-8293-0877b85f8194','c84e6163-a3e6-4c04-b821-5526df09c3d2'];

    //CAMERA ENTITIES UUIDS
    var id_camera_welcome = '409f60e2-6357-4fec-898c-b67e66e0131b';
    var id_camera_comparative = '9dc3a767-6359-4c44-9b6a-54721165c269';
    var id_camera_config = 'd298bd61-8873-4332-8986-70c6a52beac4';
    var id_camera_aspa = '93f88ede-6670-4dd4-bc98-0bd79ab4dd36';
    var id_camera_paint = '876bf7eb-8678-47f9-abe4-7fa0c68964ba';

    //MATERIAL UUIDS
    var id_paint_vermillon = '82c944e5-ad83-4101-aa91-c706b2776c68';
    var id_paint_cobalt = '171d792f-f143-47eb-8d1c-78abe88a6414';
    var id_paint_navy = '94ad0b7c-1c18-4223-9e45-e23cfd648a88';
    var id_paint_black = 'aad2356e-0ea8-4fa5-b687-fc2ce2486e3d';
    var id_light_on = '743ba67e-35fc-4e09-834e-71a72de5c27d';
    var id_light_off = 'b32b52ea-0d49-474d-8c0c-f9a959a7299b';
    var id_a_lights_on = 'e39d6e7f-814a-43ef-bdcb-7bda09e52d9c';
    var id_a_lights_off = 'c919d6d0-46bc-48c6-ab98-32c16bba670a';

    //HULL ENTITIES UUIDS
    var id_hull = 'bdc0e85d-06dc-4f35-9da7-5f18b05b416b';
    var id_l_door_paint = 'e88fb3f7-e946-48dc-9e17-a70fc821334a';
    var id_r_door_paint = '708cc5aa-f903-4d42-8dce-0a12e633e029';
   
    //DRONE LIGHT ENTITIES UUIDS
    var id_dc_f_lights = 'ee21662d-af4e-450f-99f5-2e13f2b42497';
    var id_dc_b_lights = '';//change
    var id_dc_a_lights = ['9b051f33-8a70-474e-ab40-8b8272443915', '4b41f270-bd75-4d8c-a8f1-0eeca1792384', 'f37dfe32-5b74-4d7a-a58e-0e0b96c67949', '4fa1987f-ea28-4530-a556-bb8574343ceb'
                        ,'3d741380-014a-43f4-b442-7e23a38137ea',  '62ec45b3-1b22-483f-8cc8-94d196809ca6','401db2cf-9084-450a-9eb1-9d64f05a503e','e1494db7-82d2-4fe0-a36b-841c9e6ec513'] ;


    //icons

    var icon_hover_on = "url('icons/icon_hover_on.png')";
    var icon_hover_off = "url('icons/icon_hover.png')" ;
    var icon_360_on = "url('icons/icon_360_on.png')";
    var icon_360_off = "url('icons/icon_360.png')";
    var icon_aspa1_on = "url('icons/icon_aspa1_on.png')";
    var icon_aspa1_off = "url('icons/icon_aspa1.png')";
    var icon_aspa2_on = "url('icons/icon_aspa2_on.png')";
    var icon_aspa2_off = "url('icons/icon_aspa2.png')";
    var icon_light_on = "url('icons/l1.png')";
    var icon_light_off = "url('icons/l2.png')" ;
            

    //CONDITIONS 

        //Animation parameters
    
      

        //Animations
        var drone_c_isAnimation = 0;
        var drone_og_isAnimation = 1;

        //lights
        var isLight = false;

        //Blades
        var drone_c_isBlade = 1;
        var drone_og_isBlade = 1;

        //button sets
        var isConfigureBlades = false;
        var isConfigureMats = false;
        var isConfigureAnims = false;

        //mats
        var isVermillon = true;
        var isCobalt = false;
        var isNavy = false;
        var isBlack = false;

        //windows
        var isHome = true;
        var isConfig = false;
        var isComaprative = false;

    // color
    var greenColor = 'E3FE75';
    var whiteColor = 'ffffff';
    var blackColor = '#070707d2';
    var blackFont = '000000';
    var whitheFont = 'ffffff';

    var stopDCanimIDtimeout1 = 0;
    var stopDCanimIDtimeout2 = 0;

    var enableBlade2IDtimeout = 0;
    var disableAnimIDtimeout = 0;
       


async function initApp() {

    await SDK3DVerse.joinOrStartSession({
        userToken: id_publicToken,
        sceneUUID: id_sceneUUID,
        canvas: document.getElementById("display-canvas"),
        viewportProperties: {
            defaultControllerType: SDK3DVerse.controller_type.none,
        },
        
        
    });

    //SET BLADES ENTITIES
        GetBlades(ids_aspa1_fl,dc_aspa1_fl,do_aspa1_fl);//Set BLADE 1 FL
        GetBlades(ids_aspa1_fr,dc_aspa1_fr,do_aspa1_fr);//Set BLADE 1 FR
        GetBlades(ids_aspa1_bl,dc_aspa1_bl,do_aspa1_bl);//Set BLADE 1 BL
        GetBlades(ids_aspa1_br,dc_aspa1_br,do_aspa1_br);//Set BLADE 1 BR
        GetBlades(ids_aspa2_fl,dc_aspa2_fl,do_aspa2_fl);//Set BLADE 2 FL
        GetBlades(ids_aspa2_fr,dc_aspa2_fr,do_aspa2_fr);//Set BLADE 2 FR
        GetBlades(ids_aspa2_bl,dc_aspa2_bl,do_aspa2_bl);//Set BLADE 2 BL
        GetBlades(ids_aspa2_br,dc_aspa2_br,do_aspa2_br);//Set BLADE 2 BR
      
    GetCameras();
    IntitUI();

    SDK3DVerse.updateControllerSetting({
        speed: 0.05,
        sensivity: 0.05,
        damping: 0.65,
        angularDamping: 0.65,
        lookAtpoint: [0,0,0]
        
    });

    GetDroneEntities();
    
    //Hull entities
    var temphull_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_hull);
    hull_ref = temphull_ref[0];
    var templ_door_paint_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_l_door_paint);
    l_door_paint_ref = templ_door_paint_ref[0];
    var tempr_door_paint_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_r_door_paint);
    r_door_paint_ref = tempr_door_paint_ref[0];
    
    //Drone Lights entities
    dc_f_lights_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_dc_f_lights);
    dc_b_lights_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_dc_b_lights);
    GetEntityOfArray(id_dc_a_lights,dc_a_lights_ref);

    SetMaterialsReferences();
    
    
    DefaultConfig();

    document.getElementById("bttn-go-Welcome").style.color = greenColor;
    document.getElementById("bttn-go-Config").style.color = whitheFont;
    document.getElementById("bttn-go-Comparison").style.color = whitheFont;

}

//Default config of drone
function DefaultConfig(){
    PaintIsVermillon();
    ToggleLights(lights_off, a_lights_off_mat, dc_a_lights_ref, false);
    InitDroneVisualization();
    IdleDroneOriginal();
    StopDCAnim();
    DOBlade1();
    
}


// GET METHODS
    async function GetDroneEntities(){
        //Drone rootnode entity
        rootnode_drone = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_rootnode_drone);
        console.log('root node drone components', rootnode_drone);
        
        //Drone entities
        var tempdroneConfigurable = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_droneConfigurable);
        droneConfigurable = tempdroneConfigurable[0];
        var tempdroneOriginal = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_droneOriginal);
        droneOriginal = tempdroneOriginal[0];
    }

    async function GetCameras(){
        var tempc1 = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_camera_welcome);
        cameraWelcome = tempc1[0];
        SetCamera(cameraWelcome);
        var tempc2 = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_camera_comparative);
        cameraComparative = tempc2[0];
        var tempc3 = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_camera_config);
        cameraConfig = tempc3[0];
        var tempc4 = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_camera_aspa);
        cameraAspa = tempc4[0];
        var tempc5 = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_camera_paint);
        cameraPaint = tempc5[0];

    }
    
async function SetCamera(cameraEntity){
    SDK3DVerse.engineAPI.cameraAPI.setMainCamera(cameraEntity);
}


async function SetMaterialsReferences(){
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

async function IntitUI(){
    //Set started visualization of UI
    VisbilityWelcomeWindow("flex");
    VisibilityConfigurationWindow("none");
    VisibilityComparisonWindow("none");
}

//Blades Manage
async function GetBlades(idsArray, dcArray, doArray){
    for(let i = 0; i < idsArray.length; i++){
        var tempObject = await SDK3DVerse.engineAPI.findEntitiesByEUID(idsArray[i]);
        dcArray[i] = tempObject[0];
        doArray[i] = tempObject[1];
    }
}
async function GetEntityOfArray(idsArray, entityArray){
    for(let i = 0; i < idsArray.length; i++){
        var tempObject = await SDK3DVerse.engineAPI.findEntitiesByEUID(idsArray[i]);
        entityArray[i] = tempObject[0];
    }
}


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
async function DOBlade1(){
    SetVisibilityBlades(do_aspa1_fl, true);
    SetVisibilityBlades(do_aspa1_fr, true);
    SetVisibilityBlades(do_aspa1_bl, true);
    SetVisibilityBlades(do_aspa1_br, true);
    SetVisibilityBlades(do_aspa2_fl, false);
    SetVisibilityBlades(do_aspa2_fr, false);
    SetVisibilityBlades(do_aspa2_bl, false);
    SetVisibilityBlades(do_aspa2_br, false);
}
async function DOBlade2(){
    SetVisibilityBlades(do_aspa1_fl, false);
    SetVisibilityBlades(do_aspa1_fr, false);
    SetVisibilityBlades(do_aspa1_bl, false);
    SetVisibilityBlades(do_aspa1_br, false);
    SetVisibilityBlades(do_aspa2_fl, true);
    SetVisibilityBlades(do_aspa2_fr, true);
    SetVisibilityBlades(do_aspa2_bl, true);
    SetVisibilityBlades(do_aspa2_br, true);
}
async function DCBlade1(){
    SetVisibilityBlades(dc_aspa1_fl, true);
    SetVisibilityBlades(dc_aspa1_fr, true);
    SetVisibilityBlades(dc_aspa1_bl, true);
    SetVisibilityBlades(dc_aspa1_br, true);
    SetVisibilityBlades(dc_aspa2_fl, false);
    SetVisibilityBlades(dc_aspa2_fr, false);
    SetVisibilityBlades(dc_aspa2_bl, false);
    SetVisibilityBlades(dc_aspa2_br, false);
}
async function DCBlade2(){
    SetVisibilityBlades(dc_aspa1_fl, false);
    SetVisibilityBlades(dc_aspa1_fr, false);
    SetVisibilityBlades(dc_aspa1_bl, false);
    SetVisibilityBlades(dc_aspa1_br, false);
    SetVisibilityBlades(dc_aspa2_fl, true);
    SetVisibilityBlades(dc_aspa2_fr, true);
    SetVisibilityBlades(dc_aspa2_bl, true);
    SetVisibilityBlades(dc_aspa2_br, true);
}



//Flow  control of configurator windows

//go to config
document.getElementById("bttn-go-Config").addEventListener('click', function(){
    ConfigWindow();
});


document.getElementById("bttn-start").addEventListener('click', function(){
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
}
function ComparativeWindow(){
    VisbilityWelcomeWindow("none");
    VisibilityConfigurationWindow("none");
    VisibilityComparisonWindow("flex");
    ComparativeDroneVisualization();

    StartDCHover();

    //camera
        SetCamera(cameraComparative);

    //Manage options
        DroneCustomWhichBladeIs();

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
    document.getElementById("config-set-labels").style.display = visbility;

}

function VisibilityComparisonWindow(visbility){
    document.getElementById("comparative-window").style.display = visbility;
}
//END flow control

document.getElementById("bttn-set-blade").addEventListener('click', function(){

    if(!isConfigureBlades){
        IsConfigureBlades();
    }else if (isConfigureBlades){
        isNothingConfigurable();
    }
});
document.getElementById("bttn-set-mats").addEventListener('click', function(){

    if(!isConfigureMats){
        IsConfigureMats();
    }else if (isConfigureMats){
        isNothingConfigurable();
    }
});
document.getElementById("bttn-set-anim").addEventListener('click', function(){
    if(!isConfigureAnims){
        IsConfigureAnim();
    }else if(isConfigureAnims){
        isNothingConfigurable();
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

//Methods to Manage Paint
function PaintIs(paintMat){
    hull_ref.setComponent('material_ref', paintMat);
    l_door_paint_ref.setComponent('material_ref', paintMat);
    r_door_paint_ref.setComponent('material_ref', paintMat);
}
function PaintIsVermillon(){
    PaintIs(paint_vermillon);

    SelectButtonOption("bttn-material-1","txt-material-1");
    UnselectButtonOption("bttn-material-2","txt-material-2");
    UnselectButtonOption("bttn-material-3","txt-material-3");
    UnselectButtonOption("bttn-material-4","txt-material-4");

    isVermillon = true;
    isCobalt = false;
    isNavy = false;
    isBlack = false;
}
function PaintIsCobalt(){
    PaintIs(paint_cobalt);

    SelectButtonOption("bttn-material-2","txt-material-2");
    UnselectButtonOption("bttn-material-1","txt-material-1");
    UnselectButtonOption("bttn-material-3","txt-material-3");
    UnselectButtonOption("bttn-material-4","txt-material-4");

    isVermillon = false;
    isCobalt = true;
    isNavy = false;
    isBlack = false;
}
function PaintIsNavy(){
    PaintIs(paint_navy);

    SelectButtonOption("bttn-material-3","txt-material-3");
    UnselectButtonOption("bttn-material-2","txt-material-2");
    UnselectButtonOption("bttn-material-1","txt-material-1");
    UnselectButtonOption("bttn-material-4","txt-material-4");

    isVermillon = false;
    isCobalt = false;
    isNavy = true;
    isBlack = false;
}
function PaintIsBlack(){
    PaintIs(paint_black);

    SelectButtonOption("bttn-material-4","txt-material-4");
    UnselectButtonOption("bttn-material-2","txt-material-2");
    UnselectButtonOption("bttn-material-3","txt-material-3");
    UnselectButtonOption("bttn-material-1","txt-material-1");

    isVermillon = false;
    isCobalt = false;
    isNavy = false;
    isBlack = true;
}

//Config Lights Drone
document.getElementById("bttn-anim-1").addEventListener('click', function(){
    if(isLight){
        ToggleLights(lights_off, a_lights_off_mat, dc_a_lights_ref, false, whitheFont, icon_light_off );
    }
    else if(!isLight){
        ToggleLights(lights_on, a_lights_on_mat, dc_a_lights_ref, true, greenColor, icon_light_on );
    }
});

//Methods to manage lights
function ToggleLights(fLightsMat, aLightsMat, arrayBlade1Lights, statusLight,colorText, icon){
    //toggle front lights
    dc_f_lights_ref[0].setComponent('material_ref',fLightsMat);
    
    //toggle aspa lights
    for(let i = 0; i < arrayBlade1Lights.length; i++){
        arrayBlade1Lights[i].setComponent('material_ref',aLightsMat);
    }

    isLight = statusLight;


    document.getElementById("txt-anim-1").style.color = colorText;
    document.getElementById("bttn-anim-1").style.backgroundImage = icon;


}


//Methos to manage drone visualization
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
function IdleDroneOriginal(){
    rootnode_drone[1].setComponent('animation_controller',{ dataJSON: {  is360 : false, isHover : true, isChange : false, no360 : false, noHover : false, noChange : false}});
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
    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : true, isHover : false, isChange : false, no360 : false, noIdle : false, noChange : false}});
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
    
});


function DroneCustomWhichBladeIs(){
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

function DroneOgWhichBladeIs(){
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

function SelectButtonOption(button, text){
    document.getElementById(button).style.borderColor = greenColor;
    document.getElementById(text).style.color = greenColor;
}
function UnselectButtonOption(button, text){
    document.getElementById(button).style.borderColor = whiteColor;
    document.getElementById(text).style.color = whiteColor;
}

