// map vs filter,find

const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

// map
function square(element) {
    return element * element;
}


const square = element => element * element;
const square = x => x * x;

const result = numbers.map(function(element) {
    return element * element;
})
const result1 = numbers.map(x => x * x);
console.log(result1);

// filter,find
const result2 = numbers.filter(x => x > 7);
const result3 = numbers.filter(x => x < 7);
const result4 = numbers.find(x => x > 7);
console.log(result2);
console.log(result3);
console.log(result4);