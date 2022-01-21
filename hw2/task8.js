
var f = function(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 1) {
            console.log(arr.shift())
            f(arr)
        }
        else if (arr.length == 1) console.log(arr[0])
    
        else  throw new Error("parameter can't be an empty")   
    }
    else throw new Error("parameter type should be an array")
}

f(["Black Sabbath", "Iron Maiden", "Judas Priest", "Powerwolf",
"Guns n' Roses", "Motley Crue"])