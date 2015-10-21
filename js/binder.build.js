//+++ binder-build +++

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', onWindowResize, false );


var light1 = new THREE.PointLight( 0xffffff, 1, 4500 );
light1.position.set( 0, 0, 25 );
scene.add( light1 );

// LOAD TEXTURES //

var coverTexture = new THREE.ImageUtils.loadTexture( 'img/cover.jpg' );

var coverMaterial = new THREE.MeshPhongMaterial( { map: coverTexture, side:THREE.DoubleSide } );

var spineTexture = new THREE.ImageUtils.loadTexture( 'img/spine.jpg' );

var spineMaterial = new THREE.MeshPhongMaterial( { map: spineTexture, side:THREE.DoubleSide } );
 
// BINDER //

var binderGroup = new THREE.Group();

var geometry1 = new THREE.BoxGeometry( 20, 26, 0.3 );
var binderFace1 = new THREE.Mesh( geometry1, coverMaterial );
binderFace1.rotation.y = .07;
binderGroup.add( binderFace1 );

var material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
var binderFace2 = new THREE.Mesh( geometry1, material );
binderFace2.position.z = -2.6;
binderFace2.rotation.y = -.07;
binderGroup.add( binderFace2 );

var geometry3 = new THREE.BoxGeometry( .5, 26, 4 );
var spine = new THREE.Mesh( geometry3, spineMaterial );
spine.position.x = -9.75;
spine.position.z = -1.4;
binderGroup.add( spine );

	// binderGroup.rotation.x += 1.5;
	// binderGroup.rotation.y += .005;

scene.add (binderGroup);

camera.position.z = 30;

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function render() {
	requestAnimationFrame( render );

	binderGroup.rotation.x += .005;
	binderGroup.rotation.y += .005;

	renderer.render( scene, camera );
}
render();