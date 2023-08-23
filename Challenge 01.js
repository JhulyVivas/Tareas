/*Diferencias entre las funciones */
// Las funciones regulares y las funciones de flecha son dos formas de definir funciones en JavaScript,
// pero presentan diferencias en su sintaxis, comportamiento y en cómo manejan la palabra clave `this`.

// Sintaxis:
// Función Regular:
function funcionRegular(parametros) {
    // Cuerpo de la función
}

// Función de Flecha:
const funcionFlecha = (parametros) => {
    // Cuerpo de la función
};

// Enlace de 'this':
// Las funciones regulares tienen su propio enlace `this`, cuyo valor depende de cómo se llama la función.
// Puede cambiar según el contexto de la llamada.
// Ejemplo:
function regularFunction() {
    console.log(this); // Valor de 'this' aquí es diferente dependiendo de cómo se llama la función
}

// Las funciones de flecha no tienen su propio enlace `this`.
// En su lugar, heredan el valor de `this` del ámbito que las rodea.
// Ejemplo:
const arrowFunction = () => {
    console.log(this); // Valor de 'this' aquí se hereda del contexto externo
};

// Objeto 'arguments':
// Las funciones regulares tienen un objeto `arguments` que representa los argumentos pasados a la función.
// Ejemplo:
function regularWithArguments() {
    console.log(arguments); // Objeto 'arguments' contiene los argumentos pasados
}

// Las funciones de flecha no tienen su propio objeto `arguments`.
// En su lugar, heredan el objeto `arguments` del ámbito que las rodea.

// Uso en Constructores:
// Las funciones regulares pueden usarse como constructores con la palabra clave 'new'.
// Ejemplo:
function RegularConstructor() {
    this.property = value;
}
const instance = new RegularConstructor();

// Las funciones de flecha no pueden usarse como constructores ya que no tienen su propio enlace `this`.

// Ámbito de Función:
// Las funciones regulares crean su propio ámbito de función para variables.
// Ejemplo:
function regularScope() {
    var variable = "Hola";
}

// Las funciones de flecha no crean su propio ámbito. Heredan el ámbito del contexto que las rodea.

// Valor de Retorno:
// Las funciones regulares pueden tener un retorno implícito si el cuerpo consta de una sola expresión.
// Ejemplo:
function regularReturn(a, b) {
    return a + b;
}

// Las funciones de flecha pueden tener un retorno implícito para expresiones únicas sin necesidad de 'return'.
// Ejemplo:
const arrowReturn = (a, b) => a + b;

/*Ejercicio de par o impar */
//Regular

function paroimpar (number){
        if (number % 2===0){
            console.log("is even");
        }else{
            console.log("is odd");
        }
    }
    
    //  Regular 2
    const evenorodd1 = function(number) {
        if (number % 2===0){
            console.log("is even");
        }else{
            console.log("is odd");
        }
    }
    
    //Arrow
    const a = (number) => {
        if (number % 2===0){
            console.log("is even");
        }else{
            console.log("is odd");
        }
    }