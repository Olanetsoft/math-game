import React from 'react';
import '../../NextLevel.css';

const PlayNumber = (props) => {
    // Color Theme
    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
    };
    return (
        <button
            className="number"
            style={{ backgroundColor: colors[props.status] }}
            onClick={() => props.onClick(props.number, props.status)}
        >
            {props.number}
        </button>
    );
};

export default PlayNumber;