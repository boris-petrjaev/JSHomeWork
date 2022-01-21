function f(n) {
     if (typeof n === "number")
        console.log(Math.pow(n, 3))
    else
        throw new Error("Error: all parameters type should be a Number")
}

f(12)