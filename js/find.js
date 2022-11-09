function prueba(n) {
    return n > 36;
}

function find(array, prueba) {
    for (let e of array) {
        if (condicion(e)) {
            return e;
        }
    }
    return undefined;
}
