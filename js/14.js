// Arreglos o Arrays
const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

console.log(meses);
console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Rodrigo", trabajo: "Programador"}, [1, 2, 3]];
console.log(arreglo);

// Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);

// Conocer la extension de un arreglo
console.log(meses.length);

numeros.forEach( function(numero){
  console.log(numero);
})