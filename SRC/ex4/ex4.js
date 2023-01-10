//Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.



//1º reservar-crear espacio HTML donde queremos imprimir la operación
//2º llamar al espacio de HTML en JS
//3º crear la operación que queremos imprimir
//4º crear las variables de los valores numero 1 y numero 2 que necesitamos
//5º sumar las variables
//6º escribir el texto a insertar
//7º llamar al espacio reservado en HTML e inseertar el texto ahí

const num1= 2;
const num2= 4;
const resultado = num1 + num2;
const respuesta = `La suma de ${num1} con ${num2} es ${resultado}`;
const contenedor= document.getElementById('resultadoSuma');


function insertarH1() {
    contenedor.innerHTML=respuesta;
}

insertarH1();