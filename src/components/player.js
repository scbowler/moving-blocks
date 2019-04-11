import React from 'react';
import BlockContainer from './block_container';

export default props => {
    const { blocks, getBlock } = props;

    return (
        <div className="player col-6 text-center" onClick={getBlock}>
            <h1>Player</h1>

            <BlockContainer blocks={blocks}/>

            <h1 className="text-black-50">Click to get block from Board</h1>
        </div>
    );
}
