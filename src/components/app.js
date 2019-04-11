import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import Board from './board';
import Player from './player';

class App extends Component {
    state = {
        playerBlocks: [
            { 
                color: 'red',
                id: 1,
                size: 100,
                text: 'Block 1'
            },
            {
                color: 'blue',
                id: 2,
                size: 100,
                text: 'Block 2'
            },
            {
                color: 'rgb(0, 255, 0)',
                id: 3,
                size: 100,
                text: 'Block 3'
            },
            {
                color: '#df22df',
                id: 4,
                size: 100,
                text: 'Block 4'
            }
        ],
        boardBlocks: []
    }

    moveLastBoardBlockToPlayer = () => {
        const boardBlocksCopy = this.state.boardBlocks.slice();

        if (!boardBlocksCopy.length) return;

        const block = boardBlocksCopy.pop();

        this.setState({
            boardBlocks: [...boardBlocksCopy],
            playerBlocks: [block, ...this.state.playerBlocks]
        });
    }

    moveLastPlayerBlockToBoard = () => {
        const playerBlocksCopy = this.state.playerBlocks.slice();

        if(!playerBlocksCopy.length) return;

        const block = playerBlocksCopy.pop();

        this.setState({
            boardBlocks: [block, ...this.state.boardBlocks],
            playerBlocks: [...playerBlocksCopy]
        });
    }

    render(){
        const { boardBlocks, playerBlocks } = this.state;

        return (
            <div className="container">
                <h1 className="text-center">Moving Blocks</h1>

                <div className="row">
                    <Player getBlock={this.moveLastBoardBlockToPlayer} blocks={playerBlocks} />
                    <Board getBlock={this.moveLastPlayerBlockToBoard} blocks={boardBlocks} />
                </div>
            </div>
        );
    }
}

export default App;
