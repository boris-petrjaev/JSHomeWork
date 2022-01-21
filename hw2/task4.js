var f = function(day) {
    if (typeof day === "number") {
        switch (day) {
            case 1:
                console.log("Воскресенье")
                break
            case 2:
                console.log("Понедельник")
                break
            case 3:
                console.log("Вторник")
                break
            case 4:
                console.log("Среда")
                break
            case 5:
                console.log("Четверг")
                break
            case 6:
                console.log("Пятница")
                break
            case 7:
                console.log("Суббота")
                break
            default:
                throw new Error("parameter should be in the range of 1 to 7")
            }
    } else {
        throw new Error("parameter type is not a Number")
    }
}

for (var i = 1; i <= 7; i++)
    f(i)