function pop(array) {
    x = [];
    for (let i = 0; i < length(array) - 1; i++) {
        x[i] = array[i];
    }
    return array[length(array) - 1];
}
