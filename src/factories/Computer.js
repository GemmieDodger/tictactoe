class Computer {
    constructor() {
        this.turn = false;
        this.counter = 'O';
    }
    getRandomNumber() {
        return Math.floor(Math.random() * (8 - 0 + 1) + 0);

    }
    randomPlay = () => {
        const random = this.getRandomNumber()
        return random;
    }
}

module.exports = Computer