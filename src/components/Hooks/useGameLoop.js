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
        console.log(gameboard)
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
            setWinner()
        }
    }

    const cellOnClick = (cell) => {
       gameboard.playTurn(cell, players.player.counter);
       checkWinner();
       changePlayersTurn();
       gameboard.playTurn(players.computer.randomTurn(), players.computer.counter)
       checkWinner();
    }
    return {cellOnClick, checkWinner, winner, startNewGame, changePlayersTurn, players, gameboard}
}
export default useGameLoop;