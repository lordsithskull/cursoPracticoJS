const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*Solucion usando preventDefault
form.addEventListener('submit', sumarInpunts);


function sumarInpunts(event) {
    const sumaInputs = input1.value + input2.value;
    event.preventDefault();
    pResult.innerText = "Resultado: " + sumaInputs;
}
*/

//cambiando el tipo de button a "button"
btn.addEventListener('click', sumarInpunts);

function sumarInpunts() {
    const sumaInputs = input1.value + input2.value;
    
    pResult.innerText = "Resultado: " + sumaInputs;
}