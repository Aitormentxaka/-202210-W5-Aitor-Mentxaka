function reduce(array) {
    let acumulado = 0;

    for (e of array) {
        acumulado = acumulado + e;
    }

    return acumulado;
}

console.log(reduce(x));
