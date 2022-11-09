function indexOf(array, y) {
    for (let i = 0; i < length(array); i++) {
        if (array[i] == y) {
            return i;
        }
    }
    return -1;
}
