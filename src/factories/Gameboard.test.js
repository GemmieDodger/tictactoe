const Player = require("./Player");
const Computer = require("./Computer");
const Gameboard = require("./Gameboard")

describe('game', () => {
    test('check board exists', () => {
        const gameboard = new Gameboard(); 
        expect(gameboard.board).not.toBe(null);

    }),
    test('add to board', () => {
        const gameboard = new Gameboard(); 
        gameboard.playTurn(0, 'X')
        expect(gameboard.board[0]).toBe('X');
    })
    test('play computer turn',() => {
        const gameboard = new Gameboard();
        const computer  = new Computer();
        gameboard.playTurn(2, computer.counter)
        gameboard.playTurn(computer.randomPlay(), computer.counter)
        console.log(gameboard)
        expect(gameboard.board[2]).toBe('O')
    })
    test('check winner',() => {
        const gameboard = new Gameboard();
        const computer  = new Computer();
        const player  = new Player();
        gameboard.playTurn(1, player.counter)
        gameboard.checkForWinner(player.counter)
        gameboard.playTurn(3, computer.counter)
        gameboard.checkForWinner(computer.counter)
        gameboard.playTurn(2, player.counter)
        gameboard.checkForWinner(player.counter)
        gameboard.playTurn(5, computer.counter)
        gameboard.checkForWinner(computer.counter)
        gameboard.playTurn(0, player.counter)
        gameboard.checkForWinner(player.counter)


        console.log(gameboard)
        expect(gameboard.board[2]).toBe('X')
    })
})

//not play on top of another counter. 