function isEven(num) {
    if (typeof num === "number") {
        if (num % 2 == 0) return true
        else return false

    }
    else throw new Error("parameter type is not a Number")    
}

console.log(isEven(3))
console.log(isEven(0))
console.log(isEven(9555555))