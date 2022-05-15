const nums = [1, 2, -3, 4, -5, 6, 7, -8, 9, 10, 11];
for (var i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    if (nums[i] > 1) {
        break;
    }
    console.log(nums[i]);
}

for (var i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    if (nums[i] < 0) {
        continue;
    }
    console.log(nums[i]);
}