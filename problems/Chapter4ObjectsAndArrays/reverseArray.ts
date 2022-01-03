// У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный. В качестве упражнения напишите две
// функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив – с обратным
// порядком элементов. Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том
// массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.

function reverse<T>(array: Array<T>): Array<T> {
    const reversedArray = [];
    for (let i = array.length; i > 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

function reverseInPlace<T>(array: Array<T>): Array<T> {
    for (let i = 0; i < array.length / 2; i++) {
        [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
    }
    return array;
}

describe("reverse", () => {
    it("return new reversed array", () => {
        const array = ["A", "B", "C"];
        expect(reverse(array)).toEqual(["C", "B", "A"]);
        expect(array).toEqual(["A", "B", "C"]);
    })

    it("mutates array by reversing it", () => {
        const array = [1, 2, 3, 4, 5];
        expect(reverseInPlace(array)).toEqual([5, 4, 3, 2, 1]);
        expect(array).toEqual([5, 4, 3, 2, 1]);
    })
})