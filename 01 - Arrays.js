// Repaso de arrays con razas de perros
const dogBreeds = ["Labrador", "Poodle", "Bulldog"];
const dogBreeds2 = ["German Shepherd", "Golden Retriever", "Beagle"];

//-------------------------------------------------------------------------------------

// La función `at` accede a una raza de perro por su índice.
const at = (breeds, index) => {
    return console.log(breeds.at(index));
}
at(dogBreeds, 1); // Accede a la raza en la posición 1: "Poodle"

//-------------------------------------------------------------------------------------

// La función `concat` concatena dos arrays de razas de perros.
const concat = (breeds1, breeds2) => {
    console.log(breeds1.concat(breeds2));
}
concat(dogBreeds, dogBreeds2);

//-------------------------------------------------------------------------------------

// Creación de un array usando el constructor `Array()`.
let breedConst = new Array("Dachshund", "Chihuahua", "Yorkshire Terrier");
console.log(breedConst);

//-------------------------------------------------------------------------------------

// La función `copyWithin` copia una porción de un array de razas a otra posición en el mismo array.
const copyWithin = (breeds, target, start, end) => {
    console.log(breeds.copyWithin(target, start, end));
}
copyWithin(dogBreeds, 0, 1, 2); // Copia la segunda raza en la primera posición

//-------------------------------------------------------------------------------------

// El método `entries()` crea un iterador de pares índice-valor para un array de razas.
let arrayE = ["Pomeranian", "Bulldog", "Dalmatian"];
let iterator = arrayE.entries();
for (const [index, value] of iterator) {
    console.log(index, value);
}

//-------------------------------------------------------------------------------------

// La función `every` verifica si todas las razas de perros cumplen con una condición.
const Every = (breeds, condition) => {
    return console.log(breeds.every(condition));
}
const hasTwoWords = (breed) => breed.split(" ").length === 2;
Every(dogBreeds, hasTwoWords); // Devuelve true si todas las razas tienen dos palabras

//-------------------------------------------------------------------------------------

// La función `fill` rellena un array de razas con una raza dada.
const fill = (breeds, value) => {
    console.log(breeds.fill(value));
}
fill(dogBreeds, "Husky"); // Rellena el array con la raza "Husky"

//-------------------------------------------------------------------------------------

// La función `filter` crea un nuevo array de razas con las que cumplen una condición.
const filter = (breeds, condition) => {
    return breeds.filter(condition);
}
const startsWithB = (breed) => breed.startsWith("B");
console.log(filter(dogBreeds, startsWithB)); // Filtra las razas que comienzan con "B"

//-------------------------------------------------------------------------------------

// La función `find` encuentra la primera raza de perro que cumple con una condición.
const find = (breeds, condition) => {
    return breeds.find(condition);
}
console.log(find(dogBreeds, (breed) => breed === "Poodle")); // Encuentra la raza "Poodle"

//-------------------------------------------------------------------------------------

// La función `findIndex` encuentra el índice de la primera raza de perro que cumple con una condición.
const findIndex = (breeds, condition) => {
    return breeds.findIndex(condition);
}
console.log(findIndex(dogBreeds, (breed) => breed === "Bulldog")); // Encuentra el índice de "Bulldog"

//-------------------------------------------------------------------------------------

// La función `findLast` encuentra la última raza de perro que cumple con una condición.
const findLast = (breeds, condition) => {
    return breeds.findLast(condition);
}
console.log(findLast(dogBreeds, (breed) => breed === "Poodle")); // Encuentra la raza "Poodle"

//-------------------------------------------------------------------------------------

// La función `findLastIndex` encuentra el índice de la última raza de perro que cumple con una condición.
const findLastIndex = (breeds, condition) => {
    return breeds.findLastIndex(condition);
}
console.log(findLastIndex(dogBreeds, (breed) => breed === "Poodle")); // Encuentra el índice de "Poodle"

//-------------------------------------------------------------------------------------

// La función `flat` aplana un array de arrays de razas de perros.
const breedsNested = [["Labrador"], ["Poodle", "Bulldog"]];
const flat = (breeds) => {
    return console.log(breeds.flat());
}
flat(breedsNested); // Aplana el array a un solo nivel

//-------------------------------------------------------------------------------------

// La función `flatMap` mapea cada raza y luego aplica `flat()` al resultado.
const breedNestedMap = [["Husky"], ["Golden Retriever"]];
console.log(breedNestedMap.flatMap((breed) => breed));

//-------------------------------------------------------------------------------------

// La función `forEach` ejecuta una función para cada raza de perro.
const forEach = (breeds, func) => {
    breeds.forEach(func);
}
forEach(dogBreeds, (breed) => console.log(`Breed: ${breed}`));

//-------------------------------------------------------------------------------------

// La función `includes` verifica si una raza de perro está presente en el array.
const includes = (breeds, breed) => {
    return console.log(breeds.includes(breed));
}
includes(dogBreeds, "Labrador"); // Verifica si la raza "Labrador" está en el array

//-------------------------------------------------------------------------------------

// La función `indexOf` devuelve el primer índice en el que se encuentra una raza de perro.
const indexOf = (breeds, breed) => {
    return console.log(breeds.indexOf(breed));
}
indexOf(dogBreeds, "Bulldog"); // Devuelve el índice de la raza "Bulldog"

//-------------------------------------------------------------------------------------

// La función `join` convierte un array de razas en un string separado por un delimitador.
const arrayJoin = ["Labrador", "Poodle", "Bulldog"];
console.log(arrayJoin.join(" - ")); // Une las razas con guiones

//-------------------------------------------------------------------------------------

// La función `keys` devuelve un iterador de los índices del array de razas.
const arrayKey = ["Pug", "Boxer", "Shih Tzu"];
const iterador1 = arrayKey.keys();
for (const index of iterador1) {
    console.log(index);
}

//-------------------------------------------------------------------------------------

// La función `lastIndexOf` busca el índice de una raza de perro de derecha a izquierda.
const LastIndexOf = (breeds, breed) => {
    return console.log(breeds.lastIndexOf(breed));
}
LastIndexOf(dogBreeds, "Poodle"); // Devuelve el índice de la raza "Poodle"

//-------------------------------------------------------------------------------------

// La función `map` aplica una función a cada raza y crea un nuevo array.
const map = (breeds, func) => {
    return console.log(breeds.map(func));
}
const capitalize = (breed) => breed.toUpperCase();
map(dogBreeds, capitalize); // Convierte las razas a mayúsculas

//-------------------------------------------------------------------------------------

// La función `pop` elimina la última raza de perro del array.
dogBreeds.pop();
console.log(dogBreeds);

//-------------------------------------------------------------------------------------

// La función `push` agrega una raza de perro al final del array.
dogBreeds.push("Chow Chow");
console.log(dogBreeds);

//-------------------------------------------------------------------------------------

// La función `reduce` aplica una función en acumulación a todas las razas del array.
const reduce = (breeds, func) => {
    return console.log(breeds.reduce(func));
}
const longestBreed = (acc, breed) => (breed.length > acc.length ? breed : acc);
reduce(dogBreeds, longestBreed); // Encuentra la raza más larga

//-------------------------------------------------------------------------------------

// La función `reduceRight` hace lo mismo que `reduce` pero de derecha a izquierda.
const reduceRight = (breeds, func) => {
    return console.log(breeds.reduceRight(func));
}
const shortestBreed = (acc, breed) => (acc === "" || breed.length < acc.length ? breed : acc);
reduceRight(dogBreeds, shortestBreed); // Encuentra la raza más corta

//-------------------------------------------------------------------------------------

// La función `reverse` invierte el orden de las razas de perro en el array.
const reverse = (breeds) => {
    breeds.reverse();
    return console.log(breeds);
}
reverse(dogBreeds);

//-------------------------------------------------------------------------------------

// La función `shift` elimina la primera raza de perro del array.
const shift = (breeds) => {
    breeds.shift();
    return console.log(breeds);
}
shift(dogBreeds);

//-------------------------------------------------------------------------------------

// La función `slice` crea un nuevo array de razas a partir de un subconjunto del original.
const slice = (breeds, start, end) => {
    return console.log(breeds.slice(start, end));
}
slice(dogBreeds, 1, 2); // Crea un nuevo array con la raza en la posición 1

//-------------------------------------------------------------------------------------

// La función `some` verifica si al menos una raza cumple con una condición.
const some = (breeds, condition) => {
    return console.log(breeds.some(condition));
}
some(dogBreeds, (breed) => breed.length > 10); // Devuelve true si alguna raza tiene más de 10 caracteres

//-------------------------------------------------------------------------------------

// La función `sort` ordena las razas de perro en el array.
const sort = (breeds) => {
    breeds.sort();
    return console.log(breeds);
}
sort(dogBreeds);

//-------------------------------------------------------------------------------------

// La función `splice` cambia el contenido del array eliminando/insertando razas.
const arrP = ["Chihuahua", "Dalmatian", "Pug", "Boxer"];
const splice = (breeds, start, deleteCount, ...items) => {
    const removed = breeds.splice(start, deleteCount, ...items);
    console.log("Razas: [" + breeds + "], Razas eliminadas: '" + removed + "'");
}
splice(arrP, 1, 1, "Beagle"); // Sustituye "Dalmatian" por "Beagle"

//-------------------------------------------------------------------------------------

// La función `toString` convierte el array de razas a un string con las razas separadas por comas.
const arrString = ["Pug", "Bulldog", "Dachshund"];
console.log(arrString.toString());

//-------------------------------------------------------------------------------------

// La función `unshift` agrega una o más razas de perro al inicio del array.
const unshift = (breeds, ...items) => {
    breeds.unshift(...items);
    return console.log(breeds);
}
unshift(dogBreeds, "Labradoodle", "Shiba Inu"); // Agrega "Labradoodle" y "Shiba Inu" al inicio

//-------------------------------------------------------------------------------------

// La función `values` devuelve un iterador de los valores del array de razas.
const arrVal = ["German Shepherd", "Rottweiler", "Corgi"];
const iterador = arrVal.values();
for (const breed of iterador) {
    console.log(breed);
}

//-------------------------------------------------------------------------------------
