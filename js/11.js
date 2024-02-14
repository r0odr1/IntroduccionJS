//Objetos
const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// Forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring
// const { precio } = producto
const { precio, disponible } = producto

console.log(precio);
console.log(disponible);