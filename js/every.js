function prueba(n) {
    return n == "patata";
}

function every(array, prueba) {
    for (let e of array) {
        if (!condicion(e)) {
            return false;
        }
    }
    return true;
}
