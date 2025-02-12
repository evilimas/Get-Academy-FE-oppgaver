// 1
const person = {
    name: "Alice",
    age: 25,
    // country: "Norway"
};

let {name, age , country = "Unknown"} = person


document.body.innerHTML = `Name: ${name} Age: ${age} Country: ${country}`
console.log(age)
// Bruk object destructuring for å hente ut name og age fra objektet og logg dem til konsollen.
// Destrukturer country, men gi den en standardverdi "Unknown" hvis den ikke finnes i objektet.


// 2

const colors = ["red", "green", "blue", "orange"];

// Use array destructuring to extract the three colors in the variables firstColor, secondColor, and thirdColor.

// const [firstColor, secondColor, thirdColor] = colors

// console.log(firstColor, secondColor, thirdColor)


// Destruct only the first and third colors (skip the second).

// const [firstColor ,, thirdColor] = colors

// console.log(firstColor, thirdColor)

// Use the remainder operator (...remain) to extract the first color and the remainder in a new

[colors[0], colors[2]] = [colors[2], colors[0]]
let [firstColor, ...rest] = colors

console.log("first color: " + firstColor)

console.log("Rest of the colors: " + rest)

// Swap values ​​of two variables without using temporary variable.


