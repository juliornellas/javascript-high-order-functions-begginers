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
console.log(talkToYou(name => {
    return `Goodbye, ${name}`
}))

//REAL EXAMPLE
