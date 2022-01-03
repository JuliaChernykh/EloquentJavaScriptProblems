// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
// #
// ##
// ###
// ####
// #####
// ######
// #######

function triangleCycle() {
    let str = '#';
    for (let i = 0; i < 7; i++) {
        console.log(str);
        str += '#';
    }
}