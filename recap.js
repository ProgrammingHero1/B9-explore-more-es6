/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and Spread operator
 * 6. Object.keys, Object.values, Object.entries
 * 7. for of used in array and string,
 * 8. for in loop used in object  
*/

const a = 56;
const numbers = [56, 7, 8]
const person = {
    name: 'sakib khan'
}

const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`

if (true) {

}

const square = x => x * x;
const sum = (a, b) => a + b;


const { age, z, ...others } = { x: 2, y: 5, z: 3, name: 'ovijeet', age: 55 }

const [first, second, ...remaining] = ['ram', 'sam', 'jodu', 'modhu']