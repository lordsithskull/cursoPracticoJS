const cabeza = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log (cabeza);

console.log({
    cabeza,
    p,
    parrafito,
    pid,
    input,
});

cabeza.innerHTML = 'innerhtml permite modificar el contenido <br/> del html y usar código html';
p.innerText = 'innerText Este método sirve para evitar el uso de html cuando por parte de terceros <br/> El break no es convertido a html.'

//console.log(cabeza.getAttribute('pantalla')); getAttribute permite modificar un atributo

//cabeza.classList.add('rojo');
//cabeza.classList.remove('verde');

input.value = "valor por defecto";

const imagen = document.createElement('img');

imagen.setAttribute('src','./cerdo.png')

console.log(imagen);

pid.append(imagen);