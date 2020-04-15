import React from 'react';
import { useState, useEffect } from 'react';


import utils from '../../utils';
import PlayAgain from '../LevelFive/PlayAgainLevelFive';
import StarsDisplay from '../LevelFive/StarsDisplayLevelFive';
import PlayNumber from '../LevelFive/PlayNumberLevelFive';
import '../../NextLevel.css';


const Game = (props) => {
    const [stars, setStars] = useState(utils.random(1, 12));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 12));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(8);

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    });

    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0
        ? 'won'
        : secondsLeft === 0 ? 'lost' : 'active'

    const numberStatus = number => {
        if (!availableNums.includes(number)) {
            return 'used';
        }
        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available';
    };

    const onNumberClick = (number, currentStatus) => {
        if (gameStatus !== 'active' || currentStatus === 'used') {
            return;
        }

        const newCandidateNums =
            currentStatus === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter(cn => cn !== number);

        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            setStars(utils.randomSumIn(newAvailableNums, 12));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    };

    return (
        <div className="game">
             
            <div className="help">
            🅿🅸🅲🅺 1 🅾🆁 🅼🅾🆁🅴 🅽🆄🅼🅱🅴🆁🆂 🆃🅷🅰🆃 🆂🆄🅼 🆃🅾 🆃🅷🅴 🅽🆄🅼🅱🅴🆁 🅾🅵 🆂🆃🅰🆁🆂
        </div>
        <div className="level"> 🅻🅴🆅🅴🅻【5】</div>
            <div style= {{backgroundColor: "rgb(88, 214, 141)",  display: "flex"}}>
                <div className="left">
                    {gameStatus !== 'active' ? (
                        <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/>
                    ) : (
                            <StarsDisplay count={stars} />
                        )}
                </div>
                <div className="right">
                    {utils.range(1, 12).map(number => (
                        <PlayNumber
                            key={number}
                            status={numberStatus(number)}
                            number={number}
                            onClick={onNumberClick}
                        />
                    ))}
                </div>
            </div>
           <div className="timer">Time Remaining: {secondsLeft} </div>
            
        </div>
    );
};

export default Game;
