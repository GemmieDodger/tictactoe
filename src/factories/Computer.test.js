const Computer = require("./Computer")

describe('computer', () => {
    test('check computer exists', () => {
        const computer = new Computer();
        expect(computer.counter).toBe('O')
    })
    test('check random number', () => {
        const computer = new Computer();
        const random = computer.randomPlay()
        expect(random).toBeLessThanOrEqual(8)
    })
})