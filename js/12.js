//"use strict"; // Corres JavaScript en modo estricto
//Objetos

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//Object.freeze(producto); // congela el objeto y no deja que se agreguen nuevas propiedades
Object.seal(producto) // Solamente te permite modificar las propiedades existentes
producto.precio = "imagen.jpg"


console.log(producto);