const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = true;

  if (auth) {
    resolve("Usuario Autenticado"); // El promise se cumple
  } else {
    reject("No se pudo iniciar sesion"); // El promise no se cumple
  }
});

usuarioAutenticado
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

// En los Promises existen 3 valores:
// 1. Pennding: No se ha cumplido pero tampoco se ha rechazado
// 2. Fulfilled: Ya se cumplio
// 3. Rejected: Se ha rechazado o no se pudo cumplir