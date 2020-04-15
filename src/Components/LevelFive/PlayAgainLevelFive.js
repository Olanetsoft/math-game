import React from 'react';
import '../../NextLevel.css';

const PlayAgain = (props) => {
    return (
        <div className="game-done">
        <div 
          className="message"
        style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
      >
          {props.gameStatus === 'lost' ? 'Oops! Game Over' : 'Great! Play Next Level'}
        </div>
        <button onClick={props.onClick}>Play Again</button>
        <button ><a href="/LevelFive">Next Level</a></button>
        
      </div>
    );
};

export default PlayAgain;