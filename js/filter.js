function prueba(n) {
    return n == 0;
}

function filter(array, prueba) {
    let arrayFiltrado = [];

    for (let e of array) {
        if (condicion(e)) {
            arrayFiltrado.push(e);
        }
    }
    return arrayFiltrado;
}
