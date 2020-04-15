import React from 'react';
import { useState, useEffect } from 'react';


import utils from '../../utils';
import PlayAgain from '../LevelThree/PlayAgainLevelThree';
import StarsDisplay from '../LevelThree/StarsDisplayLevelThree';
import PlayNumber from '../LevelThree/PlayNumberLevelThree';
import '../../NextLevel.css';


const Game = (props) => {
    const [stars, setStars] = useState(utils.random(1, 12));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 12));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(13);

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
             𝓝𝓮𝔀 𝓛𝓮𝓿𝓮𝓵
            </div>
            <div className="help">
            𝕻𝖎𝖈𝖐 1 𝖔𝖗 𝖒𝖔𝖗𝖊 𝖓𝖚𝖒𝖇𝖊𝖗𝖘 𝖙𝖍𝖆𝖙 𝖘𝖚𝖒 𝖙𝖔 𝖙𝖍𝖊 𝖓𝖚𝖒𝖇𝖊𝖗 𝖔𝖋 𝖘𝖙𝖆𝖗𝖘
        </div>
            <div style= {{backgroundColor: "rgb(93, 173, 226)",  display: "flex"}}>
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
            <div className="timer">Time Remaining: {secondsLeft} <span>↦↦↦↦↦ 🅻🅴🆅🅴🅻 【3】</span></div>
            <div className="help">Total Point: 𝟙⊘⊘ </div>
        </div>
    );
};

export default Game;