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

// ForEach : Cuando quiera iterar sobre un listado/arreglo y mostrar elementos en pantalla
// o simplemente enviarlos a la consola

carrito.forEach(function (producto) {
  console.log(producto.precio);
});

// ForEach con arraw function
carrito.forEach((producto) => console.log(producto.nombre));

// map: Si quiero crear un nuevo arreglo, como filtrar

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);
