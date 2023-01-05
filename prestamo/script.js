const formulario = document.getElementById("form");
const monto = document.getElementById("amount");
const cuotas = document.getElementById("fees");
const montoFinal = document.getElementById("finalAmount");
const cuotasFinales = document.getElementById("finalFees");
const intereses = document.getElementById("interests");
const montoTotalADevolver = document.getElementById("totalAmount");
const detallePrestamo = document.getElementById("detail");

const tasa = 0.015; //1.5%

//Formula calculo de intereses
// ValorCuota = tasa * monto / (1-(1+tasa)**-cantidad de cuotas)
