function stopWatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const clock = stopWatch();
// console.log(clock);
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock());