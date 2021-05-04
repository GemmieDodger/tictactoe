import React from 'react'
import styled from '@emotion/styled';

const Board = styled.div `
    display:grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: column;
    width:500px;
    height:500px;
    margin:0 auto;
    line-height:0;
    @media(max-width:1366px) {
        width:400px;
        height:400px;
    }
    @media(max-width:1024px) {
        width: 300px;
        height: 300px;
    }
    @media(max-width:768px) {
        width: 250px;
        height: 250px;
    }
    @media(max-width:320px) {
        width: 200px;
        height: 200px;
    }
`

const Wrapper = styled.section `
    margin:10px;
    @media(max-width:1366px) {
        margin:10px 20px; 
    }
    @media(max-width:1024px) {
        margin:0;
    }
    @media(max-width:768px) {
        margin:0;
    }
    @media(max-width:320px) {
        margin:0;
    }
`

const Row = styled.div `
    grid-column: 1/12;
    display:grid;
    grid-template-columns: repeat(11, 1fr);
`

// const Cell = styled.div `
//     display:flex;
//     border:1px solid #002c66;
//     background-color: #2389da;
//     &:hover{
//         background-color: yellow;
//     }
// `

// const CellNoHover = styled.div `
//     display:flex;
//     border:1px solid #002c66;
//     background-color: #2389da;
// `

// const MissedShot = styled.div `
//     background-color: #ffa31a;
//     border:1px solid #002c66;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     @media(max-width:768px) {
//         font-size: 14px;
//     }
// `

const X = styled.div `
    background-color: blue;
    border:1px solid #002c66;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family:'Roboto';
`
const O = styled.div `
    background-color: red;
    border:1px solid #002c66;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family:'Roboto';
`

const Space = styled.div `
    border:1px solid #002c66;
    background-color:yellow;
`

// const Title = styled.h3 `
//     text-align:center;
//     margin-top:20px;
//     margin-bottom:20px;
//     @media(max-width:768px) {
//         font-size: 14px;
//         margin:4px 0;
//     }
// `

// const Coordinates = styled.div `
//     background-color:#eee;
//     display:flex;
//     align-items:center;
//     justify-content:center;
// `

// const Lives = styled.p `
//     margin-top:10px;
//     color: #ffffcc;
//     text-align:center;
//     @media(max-width:768px) {
//         font-size:14px;
//         margin:25px 0;
//     }
// `

// const SankShip = styled.p `
//     margin-top:10px;
//     color: red;
//     font-weight: bold;
//     font-size: 25px;
//     text-align:center;
//     @media(max-width:768px) {
//         font-size:14px;
//         margin:25px 0;
//     }
// `
// cellOnClick={cellOnClick}
// gameBoard={gameboard}
// players={players}

const Gameboards = (props) => {
    const {cellOnClick, gameboard, players} = props;
    console.log(gameboard)
    const row = 3;
    return(
        <>
        <Wrapper>
            <Board>
                {gameboard.map(num => 
                                num  === '' ?
                                <Space key={num}></Space>
                                : {num} === 'X' ?
                                <X key={num}>X</X> 
                                : {num} === 'O' &&
                                <O key={num}>O</O>
                )}
            </Board> 
        </Wrapper>
        </>
    )
}

export default Gameboards;