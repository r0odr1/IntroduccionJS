const metodoPago = "tarjeta";

switch (metodoPago) {
  case "tarjeta":
    console.log("Pagaste con tarjeta");
    break;
  case "cheque":
    console.log("El usuario pagara con cheque, revisaremos los fondos primero");
    break;
    case "Efctivo":
      console.log("Pagaste con efectivo");
      break;
  default:
    console.log("Aun no has pagado");
    break;
}
