import React from 'react';
import '../../App.css';

const PlayAgain = (props) => {
    return (
        <div className="game-done">
        <div 
          className="message"
        style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
      >
          {props.gameStatus === 'lost' ? 'Oops! Game Over' : 'Nice! Play Next Level'}
        </div>
        <button onClick={props.onClick}>Play Again</button>
        <button ><a href="/LevelTwo">Next Level</a></button>
        
      </div>
    );
};

export default PlayAgain;