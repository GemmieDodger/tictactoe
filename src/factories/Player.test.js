const Player = require("./Player");

describe('player', () => {
    test('check player exists', () => {
        const player = new Player();
        expect(player.counter).toBe('X');
    })
})