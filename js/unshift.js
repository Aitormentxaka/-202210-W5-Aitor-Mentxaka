function unshift(array, y) {
    z = [];
    z[0] = y;
    for (let i = 0; i < length(array); i++) {
        z[i + 1] = x[i];
    }

    x = z;
    return x;
}
