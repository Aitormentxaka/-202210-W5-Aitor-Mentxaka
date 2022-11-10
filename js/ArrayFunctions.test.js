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
} from "./ArrayFunctions.js";

const cases = [[1, 2], undefined, null, 1, "Hola Mundo", { 1: 1 }, true];

describe("Given length function", () => {
    test("should first", () => {
        expect(length(cases)).toBe(cases.length);
    });
    test("length(n)===n.length", () => {
        const result = length(cases);
        const expected = cases.length;
        expect(result).toBe(expected);
    });
});
