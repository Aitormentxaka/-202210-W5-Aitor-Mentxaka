function prueba(n) {
    return n > 36;
}

function some(array, prueba) {
    for (let e of array) {
        if (condicion(e)) {
            return true;
        }
    }
    return false;
}
