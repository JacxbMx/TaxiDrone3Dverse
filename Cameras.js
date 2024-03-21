    //CAMERAS ENTITIES
    export var cameraWelcome = 0;
    export var cameraConfig = 0;
    export var cameraComparative = 0;
    export var cameraAspa = 0;
    export var cameraPaint = 0;

    //CAMERA ENTITIES UUIDS
    export var id_camera_welcome = '409f60e2-6357-4fec-898c-b67e66e0131b';
    export var id_camera_comparative = '9dc3a767-6359-4c44-9b6a-54721165c269';
    export var id_camera_config = 'd298bd61-8873-4332-8986-70c6a52beac4';
    export var id_camera_aspa = '93f88ede-6670-4dd4-bc98-0bd79ab4dd36';
    export var id_camera_paint = '876bf7eb-8678-47f9-abe4-7fa0c68964ba';
    
    export async function GetCameras(){
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


    export async function SetCamera(cameraEntity){
        SDK3DVerse.engineAPI.cameraAPI.setMainCamera(cameraEntity);
    }