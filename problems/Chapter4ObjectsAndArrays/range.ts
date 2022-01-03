// Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую массив, который
// содержит все числа из него, включая начальное и конечное. Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
// В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для
// построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть
// [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

function range(start: number, end: number, step = start < end ? 1 : -1): Array<number> {
    let res = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            res.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            res.push(i);
        }
    }

    return res;
}

function sum(numbers: Array<number>): number {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }
    return res;
}

describe("range and sum", () => {
    it("should return sum in range [1, 10]", () => {
        expect(sum(range(1, 10))).toEqual(55);
    })
    it("tests range with positive step", () => {
        expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    })
    it("tests range with negative step", () => {
        expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
    })
})