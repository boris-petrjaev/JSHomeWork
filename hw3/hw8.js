const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
const arr2 = [[[[[1,2]]]]];
const arr3 = [[[[[1,2]]],2],1];
const arr4 = [[[[[]]]]];
const arr5 = [[[[[],3]]]];
const arrays = [arr, arr2, arr3, arr4, arr5]



function f(array) {
    if (!Array.isArray(array)) {
        throw new Error("Неверный аргумент функции!");
    } else {
        let sum = 0;
        for (i of array) {
            if (Array.isArray(i)) {
                sum += f(i)
            } else if (typeof i === 'number') {
                sum += i;
            } else {
                throw new Error("Неверное значение аргумента функции!");
            }
        }
        return sum;
    }
}
for (x of arrays) {
    console.log(f(x));
}