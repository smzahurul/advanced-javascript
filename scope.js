let add = 20;

function sum(first, second) {
    let result = first + second + add;
    // console.log(result);
    if (result > 9) {
        var mood = "Happy";
        mood = 'funky';
        // console.log(mood);
    }
    return result;
}
const output = sum(3, 7);
console.log(output);
// console.log(add);