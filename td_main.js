window.addEventListener("load", initApp);

var id_userToken = "public_kuDfbQ9HCvuT9o6a";
var id_sceneUUID = "beeb00a7-260a-4b74-8632-51a6fa88c0a4";

var id_userToken_emmar = "public_vScHJ9kJ5zjJBuWH";
var id_sceneUUID_emmar = "c9d32558-52d0-4db9-bd16-8ee3d954c7c8";

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
}

