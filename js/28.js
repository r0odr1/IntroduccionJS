// Clases

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formatearProducto() {
    return `El  Producto ${this.nombre} tiene un preciode : ${this.precio}`;
  }
  // formatearPrecio() {
  //   return `El  Precio es de: ${this.precio}`;
  // }
}

const prducto2 = new Producto("Monitor Curvo de 49", 800);
const prducto3 = new Producto("Laptop", 300);

console.log(prducto2);
console.log(prducto3);

console.log(prducto2.formatearProducto());
// console.log(prducto2.formatearPrecio());