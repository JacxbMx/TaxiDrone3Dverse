/*
import * as THREE from 'three';
import CameraControls from 'camera-controls';

export async function setupCameraController(canvas) {
    CameraControls.install({ THREE: THREE });

    // create THREE camera
    const viewport = SDK3DVerse.engineAPI.cameraAPI.getViewports()[0];
    const { fovy, aspectRatio, nearPlane, farPlane } = viewport.getProjection();
    const camera = new THREE.PerspectiveCamera(fovy, aspectRatio, nearPlane, farPlane || 100000);
    const clock = new THREE.Clock();
    // create camera controls
    const cameraControls = new CameraControls(camera, canvas);

		// set the orbit point to the center of the scene
    const { min, max } = await SDK3DVerse.webAPI.getSceneAABB();
    const center = [
        (min[0] + max[0]) / 2,
        (min[1] + max[1]) / 2,
        (min[2] + max[2]) / 2,
    ];
    cameraControls.setOrbitPoint(center[0], center[1], center[2]);

    // on cameraControls update, we'll update the 3dverse camera
    function onCameraUpdate() {
        const cameraPosition = cameraControls.camera.position.toArray();
        const cameraOrientation = new THREE.Quaternion();
        cameraControls.camera.getWorldQuaternion(cameraOrientation);
        const cameraOrientationArray = cameraOrientation.toArray();

        viewport.setLocalTransform({
            position: cameraPosition,
            orientation: cameraOrientationArray,
        });
    };

    // listen to camera update events
    cameraControls.addEventListener('update', onCameraUpdate);

    // call onCameraUpdate to set the initial camera position
    onCameraUpdate();

    // animate the camera
    (function anim() {
        const delta = clock.getDelta();
        cameraControls.update(delta);
        requestAnimationFrame(anim);
    })();
};
*/