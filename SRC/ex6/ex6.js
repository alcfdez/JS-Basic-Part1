//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.



//1º reservar-crear espacio HTML donde queremos imprimir la operación
//2º crear mensajes para recoger los tres numeros
//3º crear las variables de los dos  valores que necesitamos
//4º hacer la operación de cuál es mayor
//5º imprimir resultado


let firstNumber = prompt("Escribe el primer número");
let secondNumber = prompt("Escribe el segundo número");
let thirdNumber = prompt ("escribe el tercer número")

if  (firstNumber>secondNumber && firstNumber>thirdNumber)  {
    document.write(firstNumber);
     } else if (secondNumber>thirdNumber && secondNumber>firstNumber){
        document.write(secondNumber);
} else {
    document.write(thirdNumber);
     
    }
