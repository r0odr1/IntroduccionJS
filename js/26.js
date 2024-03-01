// : Hace referencia al mismo objeto, a los mismo valores del objeto que se esta llamando

const reservacion = {
  nombre: "Rodrigo",
  apellido: "Bonilla",
  total: "5000",
  pagado: false,
  informacion: function(){
    console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
  }
};

reservacion.informacion();
