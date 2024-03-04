// Async / await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Desacargando clientes... espere...");

    setTimeout( () => {
      resolve('Los Clientes fueron descargados')
    }, 5000);
  });
}


async function app() {
  try {
    const resultado = await descargarNuevosClientes();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

app();

console.log('Este codigo no se bloquea');

// setTimeout(function () {
//   console.log('SetTimeout...');
// }, 5000);

// Cada que pase el tiempo colocado se ejecutara la funcion
// setInterval(function () {
//   console.log('SetTimeout...');
// }, 5000);