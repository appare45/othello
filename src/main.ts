import * as THREE from "three";
import "./style.css";

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

export const renderer = new THREE.WebGL1Renderer();
export let camera = new THREE.PerspectiveCamera(
  45,
  windowWidth / windowHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// リサイズ時の処理
const resize = () => {
  renderer.setSize(window.innerWidth, windowHeight);
  camera.aspect = windowWidth / windowHeight;
};

window.addEventListener("resize", resize);

resize();
document.body.appendChild(renderer.domElement);

// シーンを作成
export const scene = new THREE.Scene();
