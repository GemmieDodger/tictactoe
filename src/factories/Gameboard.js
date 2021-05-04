
class Gameboard {
    constructor() {
        this.board = ['0','1','2','3','4','5','6','7','8'];
        this.turn = 'X';
        this.winner = '';
    }

    playTurn(placeHere, player) {
        if(this.checkSpotIsFree(this.board[placeHere]) === true){
            this.board[placeHere] = player;
        } else {
            return false;
        }
    }

    checkSpotIsFree(spot) {
        if(spot !== 'X' && spot !== 'O'){
            return true;
        } 
    }
    checkForWinner(){
        if( this.board[0] === this.board[3] && this.board[3] === this.board[6] ||
            this.board[1] === this.board[4] && this.board[4] === this.board[7] ||
            this.board[2] === this.board[5] && this.board[5] === this.board[8] ||
            this.board[0] === this.board[1] && this.board[1] === this.board[2] ||
            this.board[3] === this.board[4] && this.board[4] === this.board[5] ||
            this.board[6] === this.board[7] && this.board[7] === this.board[8] ||
            this.board[0] === this.board[4] && this.board[4] === this.board[8] ||
            this.board[2] === this.board[4] && this.board[4] === this.board[6] 
        ){  
            this.winner = this.turn;
           return true;
        } else {
            this.turn === 'X' ? this.turn = 'O' : this.turn = 'X';
        }
    }

}
module.exports = Gameboard
