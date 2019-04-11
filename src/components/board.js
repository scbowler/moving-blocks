import React from 'react';
import BlockContainer from './block_container';

export default props => {
    const { blocks, getBlock } = props;

    return (
        <div className="board col-6 text-center" onClick={getBlock}>
            <h1>Game Board</h1>

            <BlockContainer blocks={blocks}/>

            <h1 className="text-black-50">Click to get block from Player</h1>
        </div>
    );
}
