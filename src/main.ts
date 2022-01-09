import * as THREE from "three";
import "./style.css";

// レンダターを作成
export const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// カメラを作成
// 引数は視野角、縦横比、描画の最短距離、描画の最長距離
export const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// シーンを作成
export const scene = new THREE.Scene();
