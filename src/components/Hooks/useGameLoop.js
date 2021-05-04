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
    console.log(players.player.turn)
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
        console.log(players.player.turn)
    }

    const checkWinner = () => {
        if(gameboard.checkForWinner()){
            setWinner(gameboard.winner)
        }
    }

    const cellOnClick = (cell) => {
       gameboard.playTurn(cell, players.player.counter);
       checkWinner();
       setPlayers(prevState => ({...prevState}))
       gameboard.playTurn(players.computer.randomPlay(gameboard.board), players.computer.counter);
       checkWinner();
       setPlayers(prevState => ({...prevState}))
       changePlayersTurn();
    }
    return {cellOnClick, checkWinner, winner, startNewGame, changePlayersTurn, players, gameboard}
}
export default useGameLoop;