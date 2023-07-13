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