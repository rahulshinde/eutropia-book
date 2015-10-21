//+++ 11.07.15 +++

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', onWindowResize, false );

var binderGroup = new THREE.Group();

var geometry1 = new THREE.BoxGeometry( 20, 30, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var binderFace1 = new THREE.Mesh( geometry1, material );
binderGroup.add( binderFace1 );

var geometry1 = new THREE.BoxGeometry( 20, 30, 1 );
var material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var binderFace2 = new THREE.Mesh( geometry1, material );
binderFace2.position.z = -10;
binderGroup.add( binderFace2 );


binderGroup.rotation.x += 1;
scene.add (binderGroup);

camera.position.z = 50;

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function render() {
	requestAnimationFrame( render );

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
	// cube.rotation.z += 0.01;

	renderer.render( scene, camera );
}
render();