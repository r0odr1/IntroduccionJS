// Arreglos o Arrays
const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros);

// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// console.log(meses);
// console.table(meses);

// const arreglo = ["Hola", 10, true, "si", null, {nombre: "Rodrigo", trabajo: "Programador"}, [1, 2, 3]];
// console.log(arreglo);

// // Acceder a los valores de un arreglo
// console.log(numeros[4]);
// console.log(numeros[2]);

// // Conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach( function(numero){
//   console.log(numero);
// })

numeros.push(60, 70); // Agrega al final del arreglo
numeros.unshift(-10, -20); // Agrega al inicio del arreglo

console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// meses.pop(); //Elimina el ultimo elemento del arreglo
// meses.shift(); //Elimina el primer elemento del arreglo

//meses.splice(2, 1); //El primer valor elimina el valor en la posicion y el segundo cuantos valores eliminara

console.table(meses);

// Rest Operator o Spread Operator

//const nuevoArreglo = [...meses, "junio"]; // Equivalente al push
const nuevoArreglo = ["junio", ...meses]; // Equivalente al shift

console.log(nuevoArreglo);