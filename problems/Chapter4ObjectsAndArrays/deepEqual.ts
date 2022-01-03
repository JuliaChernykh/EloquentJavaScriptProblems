// Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект. Но иногда полезно было бы
// сравнить объекты по содержимому.
// Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два одинаковых значения
// или это объекты, свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.
// Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, используйте оператор typeof.

function deepEqual(first: any, second: any): boolean {
    if (first === second) {
        return true;
    }

    if (first === null || second === null) {
        return first === null && second === null;
    }

    const keysFirst = Object.keys(first);
    const keysSecond = Object.keys(second);

    if (keysFirst.length != keysSecond.length) {
        return false;
    }

    for (let key in first) {
        if (!keysSecond.includes(key) || !deepEqual(first[key], second[key])) {
            return false;
        }
    }

    return true;
}

describe("deepEqual", () => {
    let obj = {here: {is: "an"}, object: 2};
    it("compares an object with itself", () => {
        expect(deepEqual(obj, obj)).toEqual(true);
    })
    it("compares two unequal objects", () => {
        expect(deepEqual(obj, {here: 1, object: 2})).toEqual(false);
    })
    it("compares two equal objects", () => {
        expect(deepEqual(obj, {here: {is: "an"}, object: 2})).toEqual(true);
    })
    it("compares null with null", () => {
        expect(deepEqual(null, null)).toEqual(true);
    })
    it("compares primitives", () => {
        expect(deepEqual(1, 1)).toEqual(true);
    })
})