function prueba(n) {
    return n == "patataa";
}

function includes(array, prueba) {
    for (let e of array) {
        if (condicion(e)) {
            return true;
        }
    }
    return false;
}
