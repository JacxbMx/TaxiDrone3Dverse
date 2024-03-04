window.addEventListener("load", initApp);

//Needed ID's to client application
var id_publicToken = "public_sjrncx7uplCXGACl";
var id_sceneUUID = "32b83e58-b5f6-4f5f-89b3-e38bdcac574c";

var droneConfigurable = 0;
var droneOriginal = 0;
var id_droneConfigurable = 'ceb32cfd-8fed-4f68-9dd9-b55f2612b398';
var id_droneOriginal = '730e598b-bf9d-4f2f-9071-7032a8ec0366';

// References to objects in scene
var hull_ref = 0;
var lights_ref = 0;


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
async function initApp() {

    await SDK3DVerse.joinOrStartSession({
        userToken: id_publicToken,
        sceneUUID: id_sceneUUID,
        canvas: document.getElementById("display-canvas"),
        viewportProperties: {
            defaultControllerType: SDK3DVerse.controller_type.orbit,
        },
        
        
    });

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
    hull_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID('de53715b-a4e5-4ff1-8533-1e50c530dda6');
    lights_ref = await SDK3DVerse.engineAPI.findEntitiesByEUID('5776f663-1fe6-44d9-a56f-012c08b7293e');

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
    PainIsRed();
    ToggleLights(lights_off, false);
    InitDroneVisualization();
    
}

//Flow  control of configurator windows
document.getElementById("bttn-goToConfig").addEventListener('click', function(){
    VisbilityWelcomeWindow("none");
    VisibilityConfigurationWindow("inline");
    ConfigDroneVisualization();
});
document.getElementById("bttn-backToWelcome").addEventListener('click', function(){
    VisbilityWelcomeWindow("inline");
    VisibilityConfigurationWindow("none");
    InitDroneVisualization();
});
document.getElementById("bttn-goToComparison").addEventListener('click', function(){
    VisibilityComparisonWindow("inline");
    VisibilityConfigurationWindow("none");
    ComparativeDroneVisualization();
});
document.getElementById("bttn-backToConfig").addEventListener('click', function(){
    VisibilityComparisonWindow("none");
    VisibilityConfigurationWindow("inline");
    ConfigDroneVisualization();
});


//Methods to Manage visbility of UI
function VisbilityWelcomeWindow(visbility){
    document.getElementById("welcome-window").style.display = visbility;
}

function VisibilityConfigurationWindow(visbility){
    document.getElementById("config-window").style.display = visbility;
}

function VisibilityComparisonWindow(visbility){
    document.getElementById("comparative-window").style.display = visbility;
}

//Config Material Paint Drone
document.getElementById("bttn-material-1").addEventListener('click', function(){
    hull_ref[0].setComponent('material_ref', paint_red);
    console.log('the paint is red');
});
document.getElementById("bttn-material-2").addEventListener('click', function(){
    hull_ref[0].setComponent('material_ref', paint_blue);
    console.log('the paint is blue');
});
document.getElementById("bttn-material-3").addEventListener('click', function(){
    hull_ref[0].setComponent('material_ref', paint_white);
    console.log('the paint is white');
});

//Methods to Manage Paint
function PainIsRed(){
    hull_ref[0].setComponent('material_ref', paint_red);
    console.log('the paint is red');
}
function PainIsBlue(){
    hull_ref[0].setComponent('material_ref', paint_blue);
    console.log('the paint is blue');
}
function PainIsWhite(){
    hull_ref[0].setComponent('material_ref', paint_white);
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
    lights_ref[0].setComponent('material_ref',materialLights);
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

    droneOriginal[0].setGlobalTransform({position : [-3,0,0]});
    droneConfigurable[0].setGlobalTransform({position : [3,0,0]});

    droneOriginal[0].setVisibility(true);
    droneConfigurable[0].setVisibility(true);
}