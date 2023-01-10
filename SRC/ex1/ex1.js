// Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.

//1º crear el espacio en HTML donde pondremos el texto
//2º identificar el espacio de Html creado para que JS lo reconozca
//3º escribir el texto a insertar en el documento js
//4º llamar al espacio reservado en html 
//5º imprimir el texto en pantalla


const texto = "<h1>Hello Javascript</h1>";
const contenedor= document.getElementById('saludo');


function insertarH1() {
    contenedor.innerHTML=texto;
}

insertarH1();