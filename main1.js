window.addEventListener("load", initApp);

//Needed ID's to client application
var id_publicToken = "public_sjrncx7uplCXGACl";
var id_sceneUUID = "32b83e58-b5f6-4f5f-89b3-e38bdcac574c";

//drones in scene
var droneConfigurable = 0;
var droneOriginal = 0;
var id_droneConfigurable = '344ee681-6918-4b0b-bc52-41213f8830c9';
var id_droneOriginal = '4449b05e-447c-4db0-ba20-c9c0da29a64a';


//Animation
var id_rootnode_drone = 'a4ea0813-e873-4a0f-a9f9-6fad2c094712';
var rootnode_drone = 0;
var id_animatorgrap = '8a40270d-1acc-4481-8704-2a0f605419bc';
var animationGraph = 0;

var isFlying_0 = false;
var isFlying_1 = false;
var isStatic_0 = false;
var isStatic_1 = false;
var is360_0 = false;
var is360_1 = false;

//Cameras in scene
var cameraWelcome = 0;
var cameraConfig = 0;
var cameraComparative = 0;
var cameraAspa = 0;
var cameraPaint = 0;



// References to objects in scene
var hull_ref = 0;
var l_door_paint_ref = 0;
var r_door_paint_ref = 0;
var lights_front_ref = 0;

//lights in scene
var id_lights_aspa1 = '';
var id_lights_aspa2 = '';
var id_lights_front = 'bf27e33e-9e38-4135-a1b2-8cd8dacc8721';
var id_lights_back = '';

//entities to select
var id_hull = 'f8e609b9-e766-4e22-970c-6a15ff30aa85';
var id_l_door_paint = '84049604-16c0-4c43-89ab-dc79cb172df5';
var id_r_door_paint = '7caa9d78-a154-424a-8dc2-c2130d1c1856';

//Needed variables to mats configuration
var paint_red = 0;
var id_paint_red = '1ac892cd-5472-46f0-8cbc-c78a8981190e';
var paint_blue = 0;
var id_paint_blue = '2a8ffa04-df25-470b-a60d-229bbbf6dd1c';
var paint_white = 0;
var id_paint_white = '5e677481-80dd-495f-b43e-1be37cfe65d6';

//Needed variables to lights configuration
var isLight = false;
var lights_off = 0;
var id_light_off = '9d992b2f-956d-4c3f-b89b-4e535554f8df';
var lights_on = 0;
var id_light_on = '9aa84fdf-52dd-46ae-9882-6e83c774caac';

// ids of camera entities
var id_camera_welcome = '409f60e2-6357-4fec-898c-b67e66e0131b';
var id_camera_comparative = '9dc3a767-6359-4c44-9b6a-54721165c269';
var id_camera_config = 'd298bd61-8873-4332-8986-70c6a52beac4';
var id_camera_aspa = '93f88ede-6670-4dd4-bc98-0bd79ab4dd36';
var id_camera_paint = '876bf7eb-8678-47f9-abe4-7fa0c68964ba';


async function initApp() {

    await SDK3DVerse.joinOrStartSession({
        userToken: id_publicToken,
        sceneUUID: id_sceneUUID,
        canvas: document.getElementById("display-canvas"),
        viewportProperties: {
            defaultControllerType: SDK3DVerse.controller_type.orbit,
        },
        
        
    });


    cameraWelcome = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_camera_welcome);
    await SDK3DVerse.engineAPI.cameraAPI.setMainCamera(cameraWelcome[0]);

    cameraComparative = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_camera_comparative);
    cameraConfig = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_camera_config);
    cameraAspa = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_camera_aspa);
    cameraPaint = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_camera_paint);

    
    SDK3DVerse.updateControllerSetting({
        speed: 0.05,
        sensivity: 0.05,
        damping: 0.65,
        angularDamping: 0.65,
        lookAtpoint: [0,0,0]
        
    });

   
    //Set started visualization of UI
    VisibilityConfigurationWindow("none");
    VisibilityComparisonWindow("none");

    //get entities references by uuid
    droneConfigurable = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_droneConfigurable);
    droneOriginal = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_droneOriginal);
    hull_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_hull);
    l_door_paint_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_l_door_paint);
    r_door_paint_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_r_door_paint);
    lights_front_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_lights_front);
    
    rootnode_drone = await SDK3DVerse.engineAPI.findEntitiesByEUID(id_rootnode_drone);
    console.log('root node drone components', rootnode_drone);

    


    //Set materials references
    paint_red = {value : id_paint_red};
    paint_blue = {value : id_paint_blue};
    paint_white = {value : id_paint_white};

    //Set lights mats references
    lights_off = {value : id_light_off};
    lights_on = {value : id_light_on};


    //Set default configuration of drone
    DefaultConfig();

    
}

//Default config of drone
function DefaultConfig(){
    PaintIsRed();
    ToggleLights(lights_off, false);
    InitDroneVisualization();
    IdleDroneOriginal();
    IsStatic0();
    
}

//Flow  control of configurator windows

//go to config
document.getElementById("bttn-go-Config").addEventListener('click', function(){
    VisbilityWelcomeWindow("none");
    VisibilityConfigurationWindow("inline");
    VisibilityComparisonWindow("none");
    ConfigDroneVisualization();
    IsStatic0();
    SDK3DVerse.engineAPI.cameraAPI.setMainCamera(cameraConfig[0]);

    //Manage configuration set
    IsConfigureMats();
});

document.getElementById("bttn-start").addEventListener('click', function(){
    VisbilityWelcomeWindow("none");
    VisibilityConfigurationWindow("inline");
    VisibilityComparisonWindow("none");
    ConfigDroneVisualization();
    IsStatic0();
    SDK3DVerse.engineAPI.cameraAPI.setMainCamera(cameraConfig[0]);

    //Manage configuration set
    IsConfigureMats();
});

//go to welcome
document.getElementById("bttn-go-Welcome").addEventListener('click', function(){
    VisbilityWelcomeWindow("inline");
    VisibilityConfigurationWindow("none");
    VisibilityComparisonWindow("none");
    InitDroneVisualization();
    SDK3DVerse.engineAPI.cameraAPI.setMainCamera(cameraWelcome[0]);
});

//go tocomparison
document.getElementById("bttn-go-Comparison").addEventListener('click', function(){
    VisbilityWelcomeWindow("none");
    VisibilityConfigurationWindow("none");
    VisibilityComparisonWindow("inline");

    ComparativeDroneVisualization();

    IsIdle0();

    SDK3DVerse.engineAPI.cameraAPI.setMainCamera(cameraComparative[0]);
});




//Methods to Manage visbility of UI
function VisbilityWelcomeWindow(visbility){
    document.getElementById("welcome-window").style.display = visbility;
    document.getElementById("start-button").style.display = visbility;
}

function VisibilityConfigurationWindow(visbility){
    document.getElementById("config-window").style.display = visbility;
}

function VisibilityComparisonWindow(visbility){
    document.getElementById("comparative-window").style.display = visbility;
}
//END flow control

document.getElementById("bttn-set-blade").addEventListener('click', function(){
    IsConfigureBlades();
    SDK3DVerse.engineAPI.cameraAPI.setMainCamera(cameraAspa[0]);
});
document.getElementById("bttn-set-mats").addEventListener('click', function(){
    IsConfigureMats();
    SDK3DVerse.engineAPI.cameraAPI.setMainCamera(cameraPaint[0]);
});
document.getElementById("bttn-set-anim").addEventListener('click', function(){
    IsConfigureAnim();
    SDK3DVerse.engineAPI.cameraAPI.setMainCamera(cameraConfig[0]);
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
    VisibilitySetLights("none");
}
function IsConfigureMats(){
    VisibilitySetBlades("none");
    VisibilitySetMats("inline");
    VisibilitySetAnims("none");
    VisibilitySetLights("none");
}
function IsConfigureAnim(){
    VisibilitySetBlades("none");
    VisibilitySetMats("none");
    VisibilitySetAnims("inline");
    VisibilitySetLights("none");
}


//Config Material Paint Drone
document.getElementById("bttn-material-1").addEventListener('click', function(){
    PaintIsRed();
});
document.getElementById("bttn-material-2").addEventListener('click', function(){
   PaintIsBlue();
});
document.getElementById("bttn-material-3").addEventListener('click', function(){
    PaintIsWhite();
});

//Methods to Manage Paint
function PaintIsRed(){

    hull_ref[0].setComponent('material_ref', paint_red);
    l_door_paint_ref[0].setComponent('material_ref', paint_red);
    r_door_paint_ref[0].setComponent('material_ref', paint_red);

    console.log('the paint is red');
}
function PaintIsBlue(){
    hull_ref[0].setComponent('material_ref', paint_blue);
    l_door_paint_ref[0].setComponent('material_ref', paint_blue);
    r_door_paint_ref[0].setComponent('material_ref', paint_blue);
    console.log('the paint is blue');
}
function PaintIsWhite(){
    hull_ref[0].setComponent('material_ref', paint_white);
    l_door_paint_ref[0].setComponent('material_ref', paint_white);
    r_door_paint_ref[0].setComponent('material_ref', paint_white);
    console.log('the paint is white');
}

//Config Lights Drone
document.getElementById("bttn-anim-1").addEventListener('click', function(){
    if(isLight){
        ToggleLights(lights_off, false);
    }
    else if(!isLight){
        ToggleLights(lights_on, true);
    }
});

//Methods to manage lights
function ToggleLights(materialLights, statusLight){
    lights_front_ref[0].setComponent('material_ref',materialLights);
    isLight = statusLight;
    console.log("las luces del dron estan", statusLight);
}


//Methos to manage drone visualization
function InitDroneVisualization(){
    
    droneOriginal[0].setGlobalTransform({position : [0,0,0]});
    droneConfigurable[0].setGlobalTransform({position : [0,0,0]});


    droneOriginal[0].setVisibility(true);
    droneConfigurable[0].setVisibility(false);
}

function ConfigDroneVisualization(){

    droneOriginal[0].setGlobalTransform({position : [0,0,0]});
    droneConfigurable[0].setGlobalTransform({position : [0,0,0]});

    droneOriginal[0].setVisibility(false);
    droneConfigurable[0].setVisibility(true);
}

function ComparativeDroneVisualization(){

    droneOriginal[0].setGlobalTransform({position : [-2.5,0,0]});
    droneConfigurable[0].setGlobalTransform({position : [2.5,0,0]});

    droneOriginal[0].setVisibility(true);
    droneConfigurable[0].setVisibility(true);
}

//Config blade config
document.getElementById("bttn-aspa-1").addEventListener('click', function(){
    //TODO aspa 1 anim
    console.log("animacion aspa 1");
});
document.getElementById("bttn-aspa-2").addEventListener('click', function(){
    //TODO aspa 2 anim
    console.log("animacion aspa 2");
});



//Config anim
document.getElementById("bttn-anim-2").addEventListener('click', function(){
    if(!isFlying_0){
        IsIdle0();
    }else if (isFlying_0){
        IsStatic0();
    }
    
   
});
document.getElementById("bttn-anim-3").addEventListener('click', function(){
    if(!is360_0){
        Is3600();
    }else if (is360_0){
        IsStatic0();
    }
    
});
//Methods to anim
function IdleDroneOriginal(){
    rootnode_drone[1].setComponent('animation_controller',{ dataJSON: {  is360 : false, isIdle : true, no360 : false, noIdle : false}});
    isFlying_1 = true;
}

function IsStatic0(){
    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : false, isIdle : false, no360 : true, noIdle : true}});
    isStatic_0 = true;
    isFlying_0 = false;
    is360_0 = false;
}

function IsIdle0(){
    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : false, isIdle : true, no360 : true, noIdle : false}});
    isStatic_0 = false;
    isFlying_0 = true;
    is360_0 = false;
}

function Is3600(){
    rootnode_drone[0].setComponent('animation_controller',{ dataJSON: {  is360 : true, isIdle : false, no360 : false, noIdle : false}});
    isStatic_0 = false;
    isFlying_0 = false;
    is360_0 = true;
}