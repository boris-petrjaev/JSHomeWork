function arrayFill(value, amount) {
    if (!Array.isArray(value) && typeof value !== 'number' &&
        typeof value !== 'object' && typeof value !== 'string' &&
        typeof amount !== 'number') {
            throw new Error("Неверные параметры функции");
        } else {
            let arr = new Array();
            for (i = 0; i < amount; i++) {
                arr[i] = value;
            }
            return arr;
        }
}

const me = {
    name: 'Vadym',
    age: 22,
};

for (i of arrayFill(me, 2)) {
    console.log(i);
}
for (i of arrayFill('s', 2)) {
    console.log(i);
}
for (i of arrayFill(2, 2)) {
    console.log(i);
}
const a = arrayFill([1, 2, 3], 2);
for (i of a) {
    for (e of i) {
        console.log(e);
    };
}