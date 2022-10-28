// Destructuring
// ternario 
// ternario simple => AND lógico => condition && expression 
// spread operator => spread syntax
// metodos de string
// metodos de number
// metodos de array
// Asincronismo
// Local storage









































//  Destructuring Docs.

// let a, b, rest;
// let numeros = [1, 2, 3, 4, 5]
// // [a, b] = [10, 20];
// //  a = numeros[0]
// //  [null, a] = numeros
// //  a = numeros[1]
// let [a, b, c, d, e] = numeros

// let persona = {
//     nombre: "Jose",
//     apellido: "Lopez",
//     mentor: true,
//     tecnologias: {
//         css: true,
//         javascript: [
//             "ECMAScript 2015",
//             "ES2022",
//             "ES2021",
//             "ES2016",
//             "ES2015",
//         ],
//         html: true
//     }
// }

// console.log(persona.nombre)

// let { tecnologias } = persona
// let javascript  = {
//     version:'1.0.0'
// } 
// // let [ firstProperty ] = javascript


// console.log("Tecnologias: ")
// console.log(tecnologias)
// expected output: 10

// console.log(b);
// expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// let versionesAnteriores = [...tecnologias.javascript]
// versionesAnteriores.pop()
// let lastVersion = tecnologias.javascript[tecnologias.javascript.length - 1] 
// console.log(version1)
// console.log(lastVersion)
// console.log(versionesAnteriores)
// let { css, html} = tecnologias

// categorizarTecnologias(versionesJs, css, html)

// function categorizarTecnologias(javascript, css, html) {
//     console.log(javascript)
//     console.log(css)
//     console.log(html)

// }

// console.log(rest);
// expected output: Array [30,40,50]

// FIN Destructuring














// Ternarios Docs.

// Sintaxis
// condición ? expr1 : expr2





// let a = 2;
// let b = 5;
// let c = [1, 2, 3]

// a < b ? console.log("a es menor que b") : console.log("a es mayor que b")

// if (a < b && c.length > 0) {
//     console.log("cumple")
// } else {
//     console.log("No cumple");
// }



// a > b && c.length > 0 
//     ? console.log("cumple") : 
//     c.length < 0 
//     ? console.log("cumple segunda condicion") : console.log("No cumple ninguna")


// if(a<b) console.log("a<b")


//  a<b && console.log("a<b")

// FIN Ternarios




// Metodos de String

// let numeros = [1,2,3,4,5,6,7]

// numeros.reduce((anterior, elemento, indice, array)=>{
//     console.log(anterior)
//     console.log(elemento)
//     console.log(indice)
//     console.log(array)
//     return anterior+elemento
// },0)



// Fin Metodos de String



// Metodos de numeros




// Fin Metodos de Number


// Metodos de Array






// Fin Metodos de Array




// https://pokeapi.co/api/v2/pokemon?limit=20
// https://pokeapi.co/api/v2/pokemon-form/{id or name}/
