//10.Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales




//1º reservar-crear espacio HTML donde queremos imprimir el ejercicio
//2º crear espacio en js para que el usuario escriba una frase y dar en el boton con un elemento de escucha
//3º recuperar la frase del usuario
//4º en esa frase contar qué vocales aparecen y cuántas veces
//5º imprimir el resultado en pantalla


const inputUserPhrase= document.getElementById('user-phrase');
const btnAñadir = document.getElementById('btn-añadir');

const result = document.getElementById ('result')

btnAñadir.addEventListener('click', numberOfVocals)


function recogerUserPhrase(){
    return inputUserPhrase.value;
    console.log(recogerUserPhrase);
}
recogerUserPhrase()



function numberOfVocals () {
let numberA =0;
let numberE = 0;
let numberI = 0;
let numberO = 0;
let numberU = 0;
for (let i = 0; i< recogerUserPhrase.length; i++) {
    if (recogerUserPhrase.charAt(i) == "a" || "e" || "i" || "o" || "u"){
        numberA && numberE && numberI && numberO && numberU ++; 
    };
  }; 
}    

