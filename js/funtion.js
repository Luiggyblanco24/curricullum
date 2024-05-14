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
    let contraseña = document.getElementById("contraseña").value;
    if (name.length == 0 || last_name.length ==0 || contraseña.length==0 ) {
        Swal.fire({
            icon: "error",
            title: "campos vacios",
            text: "Something went wrong!",
          })
    if(name.length==0){
        document.getElementById("name").style.border="2px solid red";
    }
    if(last_name.length==0){
        document.getElementById("last_name").style.background="red";
    }
    if(contraseña.length==0){
        document.getElementById("contraseña").style.background="red";
    }
    }else{
        document.getElementById("print").innerText = name + " " + last_name + " " + contraseña;
        document.getElementById("name").style.border="2px solid green";
        document.getElementById("last_name").style.background="green";
        document.getElementById("contraseña").style.border="2px solid green";
    }
}

//array
var dias_sem = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var array_num =[1,2,3,4,5,6,7,8,9];
var array_mix =[1,2.5, "abc"];
var array_mul =[
    {name:"wilder", age:21, color:"green"},
    {name:"sebastian", age:12, color:"whithe"},
    {name:"juan", age:32, color:"blue"},
    {name:"pedrp", age:23, color:"gray"},
]
var json_ejem ={
    name:"luiggy",
    last_name:"vega",
    phone:"212321223",
    email:"24luiggy@gmail.com"
}
console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejem);

for(let i=0; i<dias_sem.length;i++){
    console.log(dias_sem[i]);
}
var j=0
//while(j<array_num){
  //  console.log(array_num);
    //j++
//}
var acum=0;
for(let h=0;h<array_num.length;h++){
    acum += array_num[h]
}
console.log(acum);

var suma =0;
for (var i = 0; i < array_mul.length; i++) {
    suma += array_mul[i].age;
}
var array_ejem=[1,2,3,4,5,6,7,8,9];
document.getElementById("print_age").innerText="el valor de la suma es: " + suma;
document.getElementById("valores").value = array_num;

function limpiar() {
    document.getElementById("valores").value = "";
    document.getElementById("print_age").innerText="";
}

function agregar() {
    array_ejem.push(10);
    document.getElementById("valores").value =array_ejem;
    console.log(array_ejem);
}

function eliminar() {
    array_ejem.pop();
    document.getElementById("valores").value=array_ejem;
}

function reverse_im() {
        document.getElementById("text_rever").innerText = array_ejem.reverse();
        document.getElementById("valores").disabled = false;
}