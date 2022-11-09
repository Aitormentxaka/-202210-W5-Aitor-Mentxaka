function shift(y) {
    for (let i = 0; i < length(y); i++) {
        x[i] = y[i + 1];
    }
    let lastPosition = pop(x);
    x[length(x)] = lastPosition;

    return x;
}
