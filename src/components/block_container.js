import React from 'react';
import Block from './block';

export default props => {
    const { blocks } = props;

    const blockElements = blocks.map(block => {
        return <Block key={block.id} {...block} />
    });

    return (
        <div className="block-container py-4">
            {blockElements}
        </div>
    );
}
