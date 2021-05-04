import {useState, useEffect} from 'react';
import newGameboard from '../../factories/Gameboard';
import Player from '../../factories/Player';
import Computer from '../../factories/Computer';


const useGameLoop = () => {
    const [winner, setWinner] = useState(null);
    const [gameboard, setGameboard] = useState(null);
    const [players, setPlayers] = useState({
        player: new Player(),
        computer: new Computer(),
    }) 

const startNewGame = () => {
        setWinner(null);
        setPlayers({
            player: new Player(),
            computer: new Computer(),
        })
        setGameboard(new newGameboard())
    }

const changePlayersTurn = () => {
        setPlayers(prevState => ({
            player: {
                ...prevState.player,
                turn: !prevState.player.turn
            },
            computer:{
                ...prevState.computer,
                turn: !prevState.computer.turn
            }
        }))
    }

    const checkWinner = () => {
        if(gameboard.checkForWinner()){
            setWinner(gameboard.winner)
        }
    }
    const computerPlay = () => {
        let computer = players.computer.randomPlay(gameboard.board)

        if(gameboard.board[computer] === 'X' || gameboard.board[computer] === 'O'){
            computer = computerPlay()
        }
        
        return computer;
    }
    const cellOnClick = (cell) => {
       gameboard.playTurn(cell, players.player.counter);
       setPlayers(prevState => ({...prevState}))
       checkWinner();
       const computer = computerPlay()
       gameboard.playTurn(computer, players.computer.counter);
       setPlayers(prevState => ({...prevState}))

       checkWinner();

    }
    return {cellOnClick, checkWinner, winner, startNewGame, changePlayersTurn, players, gameboard}
}
export default useGameLoop;