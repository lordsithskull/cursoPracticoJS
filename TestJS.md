# Reto JS

¡¡Es hora de poner a prueba cuánto sabes sobre JavaScript!
Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. Puedes hacer trampa y saltar a la siguiente clase, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al Curso Básico de JavaScript, anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.
Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.
¡Mucha suerte!

## Variables y operaciones


### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve.  
	- UN VARIABLE ES UN ESPACIO DE MEMEMORIA DE UN TIPO DE DATO: STRING, NUMERICO, ARRAY
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
	-  DECLARAR ES GENERAR UNA VARIABLE. INCICIALIZAR ES DARLE UN VALOR ESPECÍFICO A LA VARIABLE.
- ¿Cuál es la diferencia entre sumar números y concatenar strings? SUMAR ES CUANDO AMBOS ELEMENTOS SON NUMERICOS (2+2=4), CONCATENAR ES CUANDO LOS ELEMENTOS SE UNEN EN UN SOLO STRING (2+"2" = "22")
- ¿Cuál operador me permite sumar o concatenar? SIMBOLO DE +

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre STRING let
- Apellido STRING let
- Nombre de usuario en Platzi STRING let
- Edad número let
- Correo electrónico STRING let
- Mayor de edad boolean 
- Dinero ahorrado número let
- Deudas número let

###  3️⃣ Traduce a código JavaScript las variables del ejemplo anterior.

- let nombre = 'nombre';
- let apellido = 'apellido';
- let usuarioPlatzi = 'userName';;
- let edad = 35;
- let correoElectrónico 'correo@correo.com'
- let isMayorDeEdad = true;
- let dineroAhorrado = 15000;
- let deudas = 1500;

###  4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido) //
    - - nombreCompleto  = nombre + " " + apellido

- Dinero real (dinero ahorrado menos deudas) // 
    - -  dineroReal = dineroAhorrado - deudas

## Funciones


### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función? 
    - - Un módulo de código que encapsula y realiza una serie de acciones especiales y que nos permite reusarla en el futuro

- ¿Cuándo me sirve usar una función en mi código? 
    - - Cuando se necesita un bloque de código debe ser usado varias veces. Para mejorar la legibilidad del código
    
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?      
    - - Los parámetros son el funcionamiento de la función, los argumentos son los datos que recibe la función para realizar el trabajo

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

```

```js
let name = "Juan David";
let lastname = "Castro Gallego";
let nickname = "juandc";

function completeName(name,lastname){
   return (name + " " + lastname);
}

function imprimir (name,lastname,nickname){
    const nombreCom = completeName(name,lastname);
    console.log("Mi nombre es " + nombreCom + ", pero prefiero que me digas " + nickname +  ".");
}

```

## Condicionales


### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional? 
    - - Es un bloque de código que se ejecutará en función de una condición (o validación) a cumplirse 
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias? If, Bool, switch
- ¿Puedo combinar funciones y condicionales? Si

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```js
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
       console.log("Solo puedes tomar los cursos gratis");
       }
       
else if (tipoDeSuscripcion === "Basic"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }
else if (tipoDeSuscripcion === "Expert"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       }   
else if (tipoDeSuscripcion === "ExpertPlus"){
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).


💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

```js
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
       console.log("Solo puedes tomar los cursos gratis");
       }
       
else if (tipoDeSuscripcion === "Basic"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }
else if (tipoDeSuscripcion === "Expert"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       }   
else if (tipoDeSuscripcion === "ExpertPlus"){
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

## Ciclos


### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
 - - bloque de coódigo que puede ser ejecutado mientras se cumpla una condicón
- ¿Qué tipos de ciclos existen en JavaScript? For, while, do while, 
- ¿Qué es un ciclo infinito y por qué es un problema?
 - - es cuando la condición nunca se cumple y el ciclo se ejecuta de forma infinita, esta acción puede ocacionar un desborde de memoria, se requiere más memoria de la disponible
- ¿Puedo mezclar ciclos y condicionales? Si

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

```

```js
let i = 0
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

i =10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

💡 Pista: puedes usar la función prompt de JavaScript.

## Listas

```js
let respuesta = 0; 
while (respuesta != '4' ) {
    let pregunta = prompt('Cuánto es 2 + 2');
    respuesta = pregunta;
}
prompt ("Respuesta correcta");


```

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array? 
 - - es una lista  de elementos.  variables, objetos o funciones
- ¿Qué es un objeto? 
 - - es una coleccion de datos, funciones y atributos que representan un "objeto" del mundo real
- ¿Cuándo es mejor usar objetos o arrays?
    - - Una funcion es mejor cuando se repite un bloque de código, un objeto es mejor cuando se requiere utilizar mas de un bloque de código, para acciones muy similares
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays? si

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```js

    arr = ["hola","adios"]
    function imprimirPrimerElemento(arr){
        console.log(arr[0]);
    } 
```


### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
 function imprimirArreglo(arr){
        for(var num of arr){
            console.log(num)
        }
    } 
```
### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js

const obj = {
    nombre: 'fulanito',
    edad: 3,
    comidasFavoritas: ['pollo', 'vegetales'],
};


 function imprimirObjeto(obj){
        const arr = Object.values(obj);
        for(var num of arr){
            console.log(num)
        }
    } 

```

¿Cómo te fue? 🏆

¡Felicidades por completar la prueba de JavaScript! Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.
Ahora sí, continúa a la siguiente clase, pero recuerda que ya no puedes abandonar el curso, debes completarlo hasta el final. No importa cuánto tiempo te tome. Yo sé que tú puedes. Y tú deberías de saberlo también.
¡Te espero en la siguiente clase para comenzar!
