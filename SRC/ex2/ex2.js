//Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.


//1º reservar-crear espacio HTML donde queremos imprimir la operación
//2º llamar al espacio de HTML en JS
//3º crear la operación que queremos imprimir
//4º crear las variables de los valores 3 y 5 que necesitamos
//5º sumar las variables
//6º escribir el texto a insertar
//7º llamar al espacio reservado en HTML e inseertar el texto ahí

const num1= 3;
const num2= 5;
const resultado = num1 + num2;
const respuesta = `La suma de ${num1} + ${num2} es ${resultado}`;
const contenedor= document.getElementById('resultadoSuma');


function insertarH1() {
    contenedor.innerHTML=respuesta;
}

insertarH1();