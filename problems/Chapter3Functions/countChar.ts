// Напишите функцию countChar, которая принимает строку и символ, который мы будем искать в строке, и возвращает
// количество таких символов, содержащихся в строке.

function countChar(str: string, char: string): number {
    let count = 0;
    for (let s of str) {
        if (s === char) {
            count += 1;
        }
    }
    return count;
}

describe("countChar", () => {
    it("counts 'B' in 'ABSLAPEFAAACB'", () => {
        expect(countChar('ABSLAPEFAAACB', 'B')).toEqual(2);
    })
    it("counts 'a' in 'ABSLAPEFAAACB'", () => {
        expect(countChar('ABSLAPEFAAACB', 'a')).toEqual(0);
    })
    it("counts 'C' in 'CCCC'", () => {
        expect(countChar('CCCC', 'C')).toEqual(4);
    })
})