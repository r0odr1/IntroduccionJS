// For Loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`El numero: ${i} es par`);
//   }else {
//     console.log(`El numero: ${i} es impar`);
//   }
// }

const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}

//While Loop : Tiene que revisar que la condicion se cumpla para que se pueda ejecutar

// let i = 1; // Indice

// while (i <= 10) { //Condicion
//   if ( i % 2 === 0){
//     console.log(`El numero ${i} es par`);
//   }else {
//     console.log(`El numero ${i} es impar`);
//   }

//   i++ // Incremento
// }

// Do While Loop : Se ejecuta al menos una vez, aunque la condicion no se cumpla

let i = 0;

do {
  console.log(i);

  i++;
} while (i < 10);