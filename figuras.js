//Cuadrado

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

//

function perimetroTriangulo (ladoMayor, ladoMenor,base){
    return (ladoMayor + ladoMenor + base);
}

function areaTriangulo (base,altura) {
    return (base * altura)/ 2;
}

//Circulo
//PI
const pi= Math.PI;

//Diametro 
function diametroCirculo (radio){
    return radio * 2;
}

//Circunferencia 
function perimetroCirculo (radio) {
    return pi * diametroCirculo(radio);
}

//Area del círculo
function areaCirculo (radio){
    return pi * (Math.pow(radio,2));
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo (){
    var input = document.getElementById("InputMayor");
    const valueMayor = input.value;
    
    const input1 = document.getElementById("InputMenor");
    const valueMenor = input1.value;
    
    const input2 = document.getElementById("InputBase");
    const valueBase = input2.value;

    const perimetro = perimetroTriangulo(valueMayor,valueMenor,valueBase);
    alert(perimetro);
    
}

function calcularAreaTriangulo () {
    var input = document.getElementById("InputBase");
    const valueBase = input.value;
    
    input = document.getElementById("InputAltura");
    const valueAltura = input.value;
    
    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);
}