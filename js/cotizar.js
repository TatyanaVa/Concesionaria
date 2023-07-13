
document.getElementById('cotizacionForm').addEventListener('submit', function(event) {
event.preventDefault();

const ci = document.getElementById('input-ci').value;
const nombre = document.getElementById('input-nombre').value;
const apellido = document.getElementById('input-apellido').value;
const direccion = document.getElementById('input-direccion').value;
const vehiculo = document.getElementById('input-vehiculo').value;
const precio = parseFloat(document.getElementById('input-precio').value);

let descuento ;
    if (vehiculo == 'fiesta') {
    descuento = precio * 0.05;
    } else if (vehiculo == 'focus') {
    descuento = precio * 0.1;
    }

let precioFinal = precio - descuento;

let cotizacionHTML = `
    <h3>Cotización:</h3>
    <p><strong>Cédula:</strong> ${ci}</p>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Apellido:</strong> ${apellido}</p>
    <p><strong>Dirección:</strong> ${direccion}</p>
    <p><strong>Vehículo:</strong> ${vehiculo =='fiesta' ? 'Ford Fiesta' : 'Ford Focus'}</p>
    <p><strong>Precio Final:</strong> ${precioFinal}</p>`;

    document.getElementById('cotizacionResult').innerHTML = cotizacionHTML;
});

    document.getElementById('rolPagos').addEventListener('submit', function(event) {
    event.preventDefault();

const empleado = document.getElementById('intup-empleado').value;
const cargo = document.getElementById('intup-cargo').value;
const horasExtras = parseInt(document.getElementById('input-horasExtras').value);

let sueldoBase = 0;
    switch (cargo) {
    case 'administrativo':
        sueldoBase = 700;
    break;
    case 'supervisor':
        sueldoBase = 650;
    break;
    case 'operario':
        sueldoBase = 440;
    break;
    case 'control_calidad':
        sueldoBase = 490;
    break;
}

  let sueldoRecibir = sueldoBase + horasExtras * 10;

let rolPagosHTML = `
    <h3>Rol de Pagos:</h3>
    <p><strong>Nombre del Empleado:</strong> ${empleado}</p>
    <p><strong>Cargo:</strong> ${cargo}</p>
    <p><strong>Sueldo a Recibir:</strong> ${sueldoRecibir}</p>`;

    document.getElementById('rolPagosResult').innerHTML = rolPagosHTML;
});
