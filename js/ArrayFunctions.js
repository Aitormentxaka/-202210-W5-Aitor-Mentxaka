export function length(array) {
    let i = 0;
    for (e of array) {
        i++;
    }
    return i;
}

export function push(array, element) {
    array[length(array)] = element;
    return length(array);
}

//para que el array mute tiene que llamarse x
export function pop(array) {
    x = [];
    for (let i = 0; i < length(array) - 1; i++) {
        x[i] = array[i];
    }
    return array[length(array) - 1];
}

//para que el array mute tiene que llamarse x
export function shift(array) {
    let result = array[0];
    for (let i = 0; i < length(array) - 1; i++) {
        x[i] = array[i + 1];
    }
    pop(x);
    return result;
}

//para que el array mute tiene que llamarse x
export function unshift(array, y) {
    z = [];
    z[0] = y;
    for (let i = 0; i < length(array); i++) {
        z[i + 1] = array[i];
    }
    x = z;
    return length(x);
}

export function some(array, prueba) {
    for (let e of array) {
        if (condicion(e)) {
            return true;
        }
    }
    return false;
}

export function every(array, prueba) {
    for (let e of array) {
        if (!prueba(e)) {
            return false;
        }
    }
    return true;
}

export function includes(array, prueba) {
    for (let e of array) {
        if (condicion(e)) {
            return true;
        }
    }
    return false;
}

export function find(array, prueba) {
    for (let e of array) {
        if (condicion(e)) {
            return e;
        }
    }
    return undefined;
}

export function findIndex(array, prueba) {
    for (let i = 0; i < length(array); i++) {
        if (prueba(array[i])) {
            return i;
        }
    }
    return -1;
}

export function indexOf(array, y) {
    for (let i = 0; i < length(array); i++) {
        if (array[i] == y) {
            return i;
        }
    }
    return -1;
}

export function filter(array, prueba) {
    let arrayFiltrado = [];

    for (let e of array) {
        if (prueba(e)) {
            arrayFiltrado.push(e);
        }
    }
    return arrayFiltrado;
}

export function map(array, prueba) {
    let y = [];
    for (let i = 0; i < length(array); i++) {
        y[i] = prueba(array[i]);
    }
    return y;
}

export function reduce(array) {
    let acumulado = 0;

    for (e of array) {
        acumulado = acumulado + e;
    }

    return acumulado;
}

function concat(array1, array2) {
    let nuevoArray = [];
    nuevoArray = array1;
    for (let i = 0; i < length(array2); i++) {
        nuevoArray[length(array1)] = array2[i];
    }

    return nuevoArray;
}

function lastIndexOff(array, prueba) {
    for (let i = length(array1); i > 0; i--) {
        if (prueba(array[i])) {
            return i;
        }
    }
    return -1;
}

function join(array, caracter = ",") {
    let string = "";
    for (let i = 0; i < length(array) - 1; i++) {
        string = string + array[i] + caracter;
    }
    string = string + array[length(array) - 1];
    return string;
}
