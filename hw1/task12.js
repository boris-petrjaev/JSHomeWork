var arr = [1,2,3,-5,-2,1,-4]
var max = arr[0]

for (var i = 0; i < arr.length; i++)
    if (arr[i] > 0)
        max = arr[i]

console.log(max)