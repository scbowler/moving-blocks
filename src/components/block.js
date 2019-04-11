import React from 'react';

export default props => {
    const { color = 'blue', size = 150, text } = props;
    const pxSize = `${size}px`;

    const style = {
        backgroundColor: color,
        display: 'inline-flex',
        height: pxSize,
        width: pxSize
    }

    const innerStyle = {
        fontWeight: 'bold',
        margin: 'auto'
    }

    return (
        <div style={style}>
            <div style={innerStyle}>
                {text}
            </div>
        </div>
    );
}
