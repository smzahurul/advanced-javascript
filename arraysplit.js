const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
const removed = nums.splice(2, 3, 77, 80);
console.log(nums);
console.log(removed);
