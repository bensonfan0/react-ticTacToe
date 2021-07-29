import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
    // these are hooks
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const currentPlayerTurn = isXNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        // spread operator is ...
        const squares = [...current];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select square
        squares[i] = currentPlayerTurn;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setIsXNext(!isXNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        // odd and even number turn determines player turn
        setIsXNext(step % 2 === 0);
    }

    // implicit return but still with return statement...
    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : "Go to Start";
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    )

    return (
        <>
            <h1>React Tic Tac Toe - With Hooks</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
                <h3>
                    {winner ? "Winner: " + winner : "Next Player: " + currentPlayerTurn}
                </h3>
            </div>
        </>
    )
}

export default Game;