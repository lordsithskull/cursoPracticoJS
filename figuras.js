//Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.group("Los lados del cuadrado miden " + ladoCuadrado + " cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado ;
console.log("El área  del cuadrado es " + areaCuadrado + " cm^2");
console.groupEnd()


//triangulo
console.group("Triangulo")
const ladoMayorTriangulo = 5;
const ladoMenorTriangulo = 5;
const baseTriangulo = 5;
const alturaTriangulo = 5.5;
console.log("La altura del triangulos es " + alturaTriangulo );
console.log("Los lados del triángulo miden " + ladoMayorTriangulo + " cm " + ladoMenorTriangulo + " cm " + baseTriangulo + " cm ");


const perimetroTriangulo = ladoMayorTriangulo + ladoMenorTriangulo + baseTriangulo;
console.log("El perimetro del triángulo es " + perimetroTriangulo + " cm");

const areaTRiangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área  del triángulo es " + areaTRiangulo + " cm^2");
console.groupEnd();

//Circulo
console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log(radioCirculo + " cm");

//Diametro 
const diametroCirculo = radioCirculo * 2;
console.log(diametroCirculo + " cm");
//PI
const pi= Math.PI;

//Circunferencia 
const perimetroCirculo = pi * radioCirculo;
console.log("El perímetro  del círculo es " + perimetroCirculo + " cm");
//Area
const areaCirculo = pi * (Math.pow(radioCirculo,2));
console.log("El área  del círculo es " + areaCirculo + " cm^2");
console.groupEnd();