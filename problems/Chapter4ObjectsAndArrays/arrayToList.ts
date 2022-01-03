// Напишите функцию arrayToList, которая строит такую структуру список, а также функцию listToArray, которая создаёт массив из
// списка. Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот
// элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве аргументов принимает список
// и число, а возвращает элемент на заданной позиции в списке или же undefined в случае отсутствия такого элемента.
// Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
// const list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

type List<T> = {
    value: any;
    rest: List<T> | null;
}

function arrayToList<T>(array: Array<T>): List<T>  {
    if (array.length === 1) {
        return {
            value: array[0],
            rest: null,
        }
    }
    return {
        value: array[0],
        rest: arrayToList(array.slice(1)),
    }
}

function listToArray<T>(list: List<T>): Array<T>  {
    let array = [];
    array.push(list.value);
    if (list.rest) {
        return array.concat(listToArray(list.rest));
    }

    return array;
}

function prepend<T>(element: any, list: List<T> | null): List<T> {
    return {value: element, rest: list};
}

function nth<T>(list: List<T>, n: number): any {
    if (n === 0) {
        return list.value;
    }
    if (list.rest) {
        return nth(list.rest, n-1);
    }
    return;
}

describe("list", () => {
    it("makes a list from an array", () => {
        expect(arrayToList([1, 2, 3])).toEqual({
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        });
    })
    it("makes an array from a list", () => {
        expect(listToArray(arrayToList([1, 2, 3]))).toEqual([1, 2, 3]);
    })
    it("creates new list", () => {
        expect(prepend(10, prepend(20, null))).toEqual({value: 10, rest: {value: 20, rest: null}})
    })
    it("returns an element from a list by its position", () => {
        expect(nth(arrayToList([10, 20, 30]), 1)).toEqual(20)
    })
})