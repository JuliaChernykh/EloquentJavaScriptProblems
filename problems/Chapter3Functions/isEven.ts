// 1. Ноль чётный.
// 2. Единица нечётная.
// 3. У любого числа N чётность такая же, как у N - 2.
// Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение.

function isEven(x: number): boolean {
    if (x === 0) {
        return true;
    }
    if (x === 1) {
        return false;
    }
    if (x < 0) {
        return isEven(x + 2);
    }
    return isEven(x - 2);
}

describe("isEven", () => {
    it("50 is even", () => {
        expect(isEven(50)).toEqual(true);
    })
    it("75 is odd", () => {
        expect(isEven(75)).toEqual(false);
    })
    it("-2 is even", () => {
        expect(isEven(-2)).toEqual(true);
    })
})
