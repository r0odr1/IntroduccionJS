// Async / await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Desacargando clientes... espere...");

    setTimeout(() => {
      resolve("Los Clientes fueron descargados");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Desacargando pedidos... espere...");

    setTimeout(() => {
      resolve("Los Pedidos fueron descargados");
    }, 3000);
  });
}

async function app() {
  try {
    // const clientes = await descargarNuevosClientes();
    // const pedidos = await descargarUltimosClientes();
    // console.log(clientes);
    // console.log(pedidos);

    const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
    console.log(resultado[0]);
    console.log(resultado[1]);

  } catch (error) {
    console.log(error);
  }
}

app();

// setTimeout(function () {
//   console.log('SetTimeout...');
// }, 5000);

// Cada que pase el tiempo colocado se ejecutara la funcion
// setInterval(function () {
//   console.log('SetTimeout...');
// }, 5000);
