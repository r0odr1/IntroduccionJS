// Declaracion de funcion

function sumar(){
  console.log(10 + 10);
}
sumar();

//expresion de la funcion
const sumar2 = function() {
  console.log(3+3);
}
sumar2();

//IIFE = protege y no deja que se mezclen las variables con otros archivos
(function() {
  console.log("Esto es una funcion");
})()