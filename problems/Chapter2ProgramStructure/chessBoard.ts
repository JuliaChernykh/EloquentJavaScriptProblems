// Напишите программу, создающую строку, содержащую решётку nхn, в которой линии разделяются символами новой строки.
// На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска:
// 8x8:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

function chessBoard(size: number): string {
    let board = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i+j) % 2 === 0) {
                board += '#';
            } else {
                board += ' ';
            }
        }
        board += '\n';
    }
    return board;
}

describe("chessBoard", () => {
    const board8x8 = '# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n';

    it("should make a 8x8 chess board", () => {
        expect(chessBoard(8)).toEqual(board8x8);
    })
})