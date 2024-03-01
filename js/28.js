// Clases

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formatearProducto() {
    return `El  Producto ${this.nombre} tiene un precio de: ${this.precio}`;
  }
  formatearPrecio() {
    return `El  Precio es de: ${this.precio}`;
  }
}

const prducto2 = new Producto("Monitor Curvo de 49", 800);
const prducto3 = new Producto("Laptop", 300);

// Herencia

class Libro extends Producto {
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    this.isbn = isbn;
  }
  formatearProducto() {
    return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
  }
}

const libro = new Libro("Javascript la Revolución", 120, "910321554");
console.log(libro.formatearProducto());

console.log(prducto2);
console.log(prducto3);

console.log(prducto2.formatearProducto());
console.log(prducto2.formatearPrecio());
