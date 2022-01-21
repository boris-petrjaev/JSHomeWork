var getDivisors = function(num) {
    if (typeof num === "number") {
        if (num != 0) {
            divisors = []
            for (var i = 0; i <= num; i++) {
                if (num % i == 0)
                    divisors.push(i)
            }
            console.log(divisors)
        }
        else throw new Error("Error: parameter can't be a 0")
    }
    else throw new Error("Error: parameter type is not a Number")
}

getDivisors(12)