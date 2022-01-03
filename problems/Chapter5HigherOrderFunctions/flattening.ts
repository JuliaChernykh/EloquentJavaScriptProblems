// Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все
// элементы входных массивов.

function flattening<T>(arrays: Array<Array<T>>): Array<T> {
    return arrays.reduce((newArray, curArray) => newArray.concat(curArray), [])
}

describe("flattening", () => {
    it("checks flattening", () => {
        expect(flattening([[1, 2, 3], [4, 5], [6]])).toEqual([1, 2, 3, 4, 5, 6]);
    })
})