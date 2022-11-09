function operation(n) {
    return n * 2;
}
function map(array, operation) {
    let y = [];
    for (let i = 0; i < length(array); i++) {
        y[i] = operation(array[i]);
    }
    return y;
}
