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


const Gameboards = (props) => {
    const {cellOnClick, gameboard, players} = props;
    const row = 3;

    return(
        <>
        <Wrapper>
            <Board>
                {gameboard.map((num, index) => 
                                num === 'X' ?
                                <X key={index}>X</X> 
                                : num === 'O' ?
                                <O key={index}>O</O> :
                                <Space
                                key={index} 
                                onClick={(e) => cellOnClick(index)}
                                >{num}</Space>
                

                )}
            </Board> 
        </Wrapper>
        </>
    )
}

export default Gameboards;