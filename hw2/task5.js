var arr = [1, 2, -4, 3, -9, -1, 7]
var positiveArr = []


function isPositive(num) {
    if (typeof num === "number") {
        if (num >= 0) {
            return true
        }
        else {
            return false
        }
    }
    else {
        throw new Error("parameter type is not a Number")
    }
}

for (var i = 0; i < arr.length; i++) {
    if (isPositive(arr[i]))
        positiveArr.push(arr[i])
}

console.log(positiveArr)