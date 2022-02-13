function f(x) {
    console.log(`Это ${x}`);
}
let arr = [1, 2, 3];

function forEach(array, f) {
    if (!Array.isArray(array) || (!f instanceof Function)) {
        throw new Error("Неверный аргумент функции");
    }
    else {
       for (i of arr) {
           f(i);
       }
    }
}

forEach(arr, f);