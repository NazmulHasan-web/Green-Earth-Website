
1. What is the difference between var, let, and const?
ans:
var: is used for variables inside a function and can be reused.
let: is for variables inside a block and can change value but not be reused.
const: is for variables that don’t change and cannot be reused, but objects inside it can be updated.

2.What is the difference between map(), forEach(), and filter()?
ans:
forEach(): goes through each item in an array but gives no new array.
map(): goes through each item and makes a new array with the results.
filter() :makes a new array with only the items that match a condition.

3.What are arrow functions in ES6?
ans:
Arrow functions are a short way to write functions using =>.
They use this from the surrounding code instead of their own.
They are useful for simple functions and callbacks.

4.How does destructuring assignment work in ES6?
ans:
Destructuring  extract values from arrays or objects into variables in one line.
For arrays, i can use [ ] to get values: const [x, y] = [10, 20].
For objects i can use { } to get properties: const {name, age} = {name: "shojib", age: 28}.

5.Explain template literals in ES6. How are they different from string concatenation?
ans:
Template literals are strings using backticks ` that can include variables with ${}.
They can be written on multiple lines without \n.
They are easier and cleaner than using + for combining strings.