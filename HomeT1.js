
const mainModule = [

  function(name = prompt("Enter ur name")){
     return alert(`Hello, ${name}`);
  },

  function(year = prompt("Enter ur year"), currentYear = new Date().getFullYear()){
     return alert(`U are  ${currentYear-year} years old`);
  },

  function(a = prompt("Enter a")){
     return alert(a*4);
  },

  function(r = prompt("Entrer radius")){
     return alert(3.14 * r ** 2);
  },

  function(s = prompt("Enter S"), t = prompt("Enter t")){
     return alert(`Ur speed is  ${s/t} km/h`)
  },

  function(curs = 1.18, $ = prompt("Enter $")){
     return alert(`${$} $ eqls ${($/curs).toFixed(3)} euro`);
  },

  function(gb = prompt("Enter GB"), size = 820){
     return alert(`${((gb*1000)/size).toFixed(0)} files`);
  },

  function(sum = prompt("Enter ur cash"), price = prompt("Enter prise of 🍫")){
     return alert(`U will by ${(sum/price).toFixed(0)} 🍫 and u will have ${sum % price} money left`);
  },

  function(numb = prompt("Enter value")){
    return alert(`Result is ${numb.split("").reverse().join("")}`);
  },

  function(numb = prompt("Enter value")){
    return alert(`Result is ${numb%2==0 || false}`);
  },
];


document.getElementsByTagName("button")[0].addEventListener("click" , ()=>Starter());

function Starter(n){
  arguments.length == 0 ? 
   mainModule.forEach((e)=>e()) :
   mainModule[n]();
}










// ! Cюда уже можно не смотрeть 😉

function interfaceModule () {
  
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

 camera.position.set( 50, 50, 50 );
 camera.lookAt( 0, 0, 0 );

 const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.getElementById("three").appendChild( renderer.domElement );

 const material = new THREE.LineBasicMaterial( { color: "aqua" } );

  

  let points = [];

  setInterval(function(){
    
    points.push( new THREE.Vector3( Math.random()*75, Math.random()*75, Math.random()*75 ) );
     let geometry = new THREE.BufferGeometry().setFromPoints( points );
     let line = new THREE.Line( geometry, material );
      scene.add(line);
      renderer.render( scene, camera );
     
    },500);


}


interfaceModule();




