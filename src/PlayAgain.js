import React from 'react';
import './App.css';


const PlayAgain = (props) => {
    return (
        <div className="game-done">
        <div 
          className="message"
        style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
      >
          {props.gameStatus === 'lost' ? 'Oops! Game Over' : 'Nice'}
        </div>
        <div>
        <button onClick={props.onClick}>Play Again</button>
        <button>Next Level</button>
        </div>
        
      </div>
    );
};

export default PlayAgain;