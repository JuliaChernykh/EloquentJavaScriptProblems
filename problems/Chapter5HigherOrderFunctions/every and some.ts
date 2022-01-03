// У массивов есть ещё стандартные методы every и some. Они принимают как аргумент некую функцию, которая, будучи
// вызванной с элементом массива в качестве аргумента, возвращает true или false. Метод every возвращает true, когда
// функция возвращает true для всех элементов массива. Some возвращает true, когда заданная функция возвращает true при
// работе хотя бы с одним из элементов массива. Они не обрабатывают больше элементов, чем необходимо – например, если
// some получает true для первого элемента, он не обрабатывает оставшиеся.
// Напишите функции every и some, которые работают так же, как эти методы, только принимают массив в качестве аргумента.

function every(array: Array<any>, testFunc: (item: any) => boolean): boolean {
    for (let element of array) {
        if (!testFunc(element)) {
            return false;
        }
    }
    return true;
}

function some(array: Array<any>, testFunc: (item: any) => boolean): boolean {
    for (let element of array) {
        if (testFunc(element)) {
            return true;
        }
    }
    return false;
}

describe("every and some", () => {
    it("checks every", () => {
        expect(every([NaN, NaN, NaN], isNaN)).toEqual(true);
        expect(every([NaN, NaN, 4], isNaN)).toEqual(false);
    })
    it("checks some", () => {
        expect(some([NaN, 3, 4], isNaN)).toEqual(true);
        expect(some([2, 3, 4], isNaN)).toEqual(false);
    })
})