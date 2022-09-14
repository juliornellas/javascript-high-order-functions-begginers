/**
 * Types of functions:
 * - Regular;
 * - Anonymous;
 * - Arrow function.
 */

//Regular Function
// function greet(name){
//     return `Hello, ${name}`
// }

//Anonymous Function
// const greet = function(name){
//     return `Hello, ${name}`
// }

//Arrow Function for Anonymous Function
const greet = name => `Hello, ${name}`

console.log(greet("Julio"))

/**
 * High Order Function is a function that is capable to receive other function as a parameter
 * Ordering as it receives the functions
 */
function talkToYou(speak){
    const speech = speak('Tiradentes')
    return `The person says "${speech}"`
}

//Passing an existing function as parameter
console.log(talkToYou(greet))

//Passing a function as parameter
console.log(talkToYou(name => `Goodbye, ${name}`))

//REAL EXAMPLE

const students = [
    {name:"Tiradentes", course:"IT"},
    {name:"Maria Emília", course:"Tourism"},
    {name:"Saci Pereê", course:"IT"},
    {name:"Mula Sem Cabeça", course:"IT"},
    {name:"Curupira", course:"Tourism"},
    {name:"Lobisomem", course:"Engineering"},
    {name:"Boto Cor de Rosa", course:"Tourism"},
    {name:"Boitata", course:"Engineering"}
];

//Using FOR
const tourism = [];
for (let index = 0; index < students.length; index++) {
    if(students[index].course === "Tourism"){
        tourism.push(students[index])    
    }
}

console.info('Tourism students - FOR Method',tourism)

//High Order - Method: Filter
// const tourism2 = students.filter(function(student){
//     return student.course === "Tourism"
// })

// Using Arrow Function
// const tourism2 = students.filter(student => student.course === "Tourism")

//Arrow function outside the FLITER method
const isTourism = student => student.course === "Tourism";
const tourism2 = students.filter(isTourism)

console.info('Tourism students - FILTER',tourism2)


