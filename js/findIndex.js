function prueba(n) {
    return n > 40000;
}

function findIndex(array, prueba) {
    for (let i = 0; i < length(array); i++) {
        if (prueba(array[i])) {
            return i;
        }
    }
    return -1;
}
