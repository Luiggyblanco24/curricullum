//formas de imprimir en pantalla
//alert("hola soy un alert")
//console.log("hola soy un mensaje de consola");
//document.write("hola soy la interfraz principal")
//Swal.fire("hola soy una alerta de una libreria");

//variables y tipos 
const pi=3.14;
var name = "luiggy sebastian";
let edad = 32;
let edad_string = "32";
var bool = true;

//operadores basicos + - / * %
var suma = 5-2;
console.log(suma);
console.log(edad_string);
var one = 10;
var two = 20;
console.log(one+two);
console.log(one-two)
console.log(one*two)
console.log(one%two)
console.log(one/two)
//operadores de comparacion 
// < > >= <= <>
//== comparacion 
//operadores logicos
// and && or ||
console.log("mi nombre " + name + " tiene como edad: " + edad)
function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        imageAlt: "A tall image",
        showConfirmButton: false,
      });
}

function send_info(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if (name.length == 0 || last_name.length ==0 ) {
        Swal.fire({
            icon: "error",
            title: "campos vacios",
            text: "Something went wrong!",
           
          });
    if(name.length==0){
        document.getElementById("name").style.border="2px solid red";
    }
    if(last_name.length==0){
        document.getElementById("last_name").style.background="red";
    }
    if(contraseña.length==0){
        document.getElementById("contraseña").style.border="2px solid red";
    }
    }else{
        document.getElementById("print").innerText = name + " " + last_name;
        document.getElementById("name").style.border="2px solid green";
        document.getElementById("last_name").style.background="green";
        document.getElementById("contraseña").style.border="2px solid green";
    }
}
