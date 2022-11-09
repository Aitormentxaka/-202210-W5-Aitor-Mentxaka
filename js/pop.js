function pop(y) {
    x = [];
    for (let i = 0; i < length(y) - 1; i++) {
        x[i] = y[i];
    }
    x[length(x) - 1];
    return y[length(y) - 1];
}
