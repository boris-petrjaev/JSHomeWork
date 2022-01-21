function f(a, b, c) {
    if (typeof a !== "number" &&
        typeof b !== "number" &&
        typeof c !== "number")
        throw new Error("Error: all parameters type should be a Number")
    else
        console.log((a - b) / c)
}

f(9, 3, 2)