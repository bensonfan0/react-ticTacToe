export function calculateWinner(squares) {
    console.log("hi im calculating winner rn!");
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < lines.length ; i++) {
        console.log("i is: " + i);
        const [a, b, c] = lines[i];
        // check all possible winning lines, if character in square is same
        // for all winning instances then a player has won 
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    
    return null;
} 