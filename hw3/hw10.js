const arr = [3, 2, 1];
function reverse(array) {
    if (!Array.isArray(array)) {
        throw new Error("Неверный параметр функции");
    } else {
        if (array.length == 0) {
            throw new Error("Передай пустой массив")
        } else {
            let arr = new Array();
            while (array.length > 0) {
                arr.push(array.pop());
            }
            return arr;
        }
    }
}

console.log(reverse(arr));