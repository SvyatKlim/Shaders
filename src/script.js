import "./main.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { DoubleSide } from "three";

// const threeJS = () => {
//   /**
//    * Base
//    */
//   // Debug
//   const gui = new dat.GUI();

//   // Canvas
//   const canvas = document.querySelector("canvas.webgl");

//   // Scene
//   const scene = new THREE.Scene();

//   const textureLoader = new THREE.TextureLoader();
//   const wafer = textureLoader.load("img/grid.png",function(texture){
//     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   });
//   console.log(wafer);

//   /**
//    * Lights
//    */
//   // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//   // scene.add(ambientLight);

//   // const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3);
//   // directionalLight.position.set(1, 0.25, 0);
//   // scene.add(directionalLight);
//   const spotLight = new THREE.SpotLight(0xffffff);
//   spotLight.position.set(-0, 30, 60);
//   spotLight.castShadow = true;
//   spotLight.intensity = 0.6;
//   scene.add(spotLight);

//   const material = new THREE.MeshPhongMaterial({
//     color: 0x7777ff,
//     map: wafer,
//   });
//   material.roughness = 0.4;
//   const geometry = new THREE.CircleGeometry(5, 32);
//   const circle = new THREE.Mesh(geometry, material);
//   scene.add(circle);

//   /**
//    * Sizes
//    */
//   const sizes = {
//     width: window.innerWidth / 1.5,
//     height: window.innerHeight / 1.5,
//   };

//   window.addEventListener("resize", () => {
//     // Update sizes
//     sizes.width = window.innerWidth;
//     sizes.height = window.innerHeight;

//     // Update camera
//     camera.aspect = sizes.width / sizes.height;
//     camera.updateProjectionMatrix();

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//   });

//   /**
//    * Camera
//    */
//   // Base camera
//   const camera = new THREE.PerspectiveCamera(
//     100,
//     sizes.width / sizes.height,
//     0.01,
//     100
//   );
//   camera.position.x = 1;
//   camera.position.y = 1;
//   camera.position.z = 8;

//   scene.add(camera);

//   // Controls
//   const controls = new OrbitControls(camera, canvas);
//   controls.enableDamping = true;

//   /**
//    * Renderer
//    */
//   const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     alpha: true,
//   });
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//   wafer.anisotropy = renderer.capabilities.getMaxAnisotropy();

//   /**
//    * Animate
//    */
//   const clock = new THREE.Clock();

//   const tick = () => {
//     const elapsedTime = clock.getElapsedTime();

//     // Update controls
//     controls.update();

//     // Render
//     renderer.render(scene, camera);

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick);
//   };

//   tick();
// };

const createClass = () => {
  let list = document.querySelector(".list ul");
  setTimeout(() => {
    list.classList.add("load");
  }, 300);
};

const offset = (el) => {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};

const detectScroll = (el, fs, vs, obj = "class", cb) => {
  const mask = document.querySelector(el);
  if (mask != undefined) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll() {
      const elHeight = mask.offsetHeight;
      const elOffsett = offset(mask).top;
      const animStart = 3;

      let animItemPoint = window.innerHeight - elHeight / animStart;

      if (elHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }


      if ( window.pageYOffset > elOffsett - animItemPoint && window.pageYOffset < elOffsett + elHeight) {
        if(!mask.classList.contains('active')){
          mask.classList.add("active"); 
        }

        // if(cb){
        //   cb(fs, vs, el);
        // }
      }
    }
  }
};



function init() {
  createClass();
  // rotateElement();
  detectScroll(".mask__wrapper");
}

document.addEventListener("DOMContentLoaded", init());
