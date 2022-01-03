// Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

function min(first: number, second: number): number {
    return first < second ? first : second;
}

describe("min", () => {
    it("should return 0", () => {
        expect(min(0, 10)).toEqual(0);
    })
    it("should return -10", () => {
        expect(min(0, -10)).toEqual(-10);
    })
})