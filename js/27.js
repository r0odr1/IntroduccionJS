// POO

//Object Literal
const producto = {
  nombre: "Tablet",
  precio: 500
}

// Object Constructor

function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

const producto2 = new Producto("Monitor Curvo de 49", 800, "Disponible")
const producto3 = new Producto("Laptop", 300, "No disponible")
const producto4 = new Producto("Mouse", 50, "Disponible")
const producto5 = new Producto("Teclado", 100, "Disponible")

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
