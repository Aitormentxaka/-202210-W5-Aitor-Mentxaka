import {
    length,
    push,
    pop,
    shift,
    unshift,
    some,
    every,
    includes,
    find,
    findIndex,
    indexOf,
    filter,
    map,
    reduce,
    concat,
    lastIndexOff,
    join,
} from ".ArrayFunctions";

const cases = [[1, 2], undefined, null, 1, "Hola Mundo", { 1: 1 }, true];

describe("Given length function", () => {
    test("", () => {
        expect(length(cases)).toBe(cases.length);
    });
});
