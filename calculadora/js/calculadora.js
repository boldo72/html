const numero1 = document.getElementById('num1');
const numero2 = document.getElementById('num2');

function somar() {
    resultado.textContent = Number(numero1.value) + Number(numero2.value);
}

function subtrair() {
    resultado.textContent = Number(numero1.value) - Number(numero2.value);
}

function multiplicar() {
    resultado.textContent = Number(numero1.value) * Number(numero2.value);
}

function dividir() {
    resultado.textContent = Number(numero1.value) / Number(numero2.value);
}

function limpar() {
    numero1.value = '';
    numero2.value = '';
    resultado.innerHTML = '';
}
//const btnSomar = document.getElementById('somar');
//const btnSubtrair = document.getElementById('subtrair');
//const btnMultiplicar = document.getElementById('multiplicar');
//const btnDividir = document.getElementById('dividir');
//const resultado = document.getElementById('resultado');