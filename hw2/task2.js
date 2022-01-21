function f(...nums) {
    var sum = 0;
    for (i = 0; i < nums.length; i++)
        if (typeof nums[i] !== "number")
            throw new Error("Error: all parameters type should be a Number")
        else {
            sum += nums[i]
        }
        console.log(sum)
}

f(225, 225, 225)