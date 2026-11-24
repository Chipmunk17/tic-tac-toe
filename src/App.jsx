import { useState } from "react";
import "./App.css";

function checkWinner(board){
  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (const combination of winningCombinations){
    const [a, b, c] = combination;

    if(
      board[a] !== null && 
      board[a] === board[b] && 
      board[a] === board[c]
    )
    {
      return board[a];
    }
  }
  return null;
}

function App() {
  const[board, setBoard] = useState(
    Array(9).fill(null)
  );

  const[currentPlayer, setCurrentPlayer] = useState("X")

  const [scores, setScores] = useState({
    X: 0,
    O: 0,
    draw: 0
  });

  const winner = checkWinner(board);

  const isDraw = winner === null && !board.includes(null)

  let status;
  if(winner){
    status = `Player ${winner} Wins!`;
  } else if(isDraw){
    status = "It's a Draw!";
  } else{
    status = `Current Turn: ${currentPlayer}`;
  }

  function handleClick(index){
    if (board[index] !== null || winner !== null){
      return;
    }

    const newBoard = [...board];

    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
        setScores(prevScores => ({
            ...prevScores,
            [newWinner]: prevScores[newWinner] + 1
        }));
    } else if (!newBoard.includes(null)) {
        setScores(prevScores => ({
            ...prevScores,
            draw: prevScores.draw + 1
        }));
    }

    setCurrentPlayer(
      currentPlayer === "X" ? "O" : "X"
    );

  }

  function handleRestart(){
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
  }

  function handleResetScore() {
    setScores({
        X: 0,
        O: 0,
        draw: 0
    });
  }


  return (
      <div className="container">
          <h1>Tic-Tac-Toe</h1>

          <p className="subtitle">
              Make your move.
          </p>

          <div className="scoreboard">
              <div className="score player-x">
                  <p>Player X</p>
                  <h2>{scores.X}</h2>
              </div>

              <div className="score">
                  <p>Draw</p>
                  <h2>{scores.draw}</h2>
              </div>

              <div className="score player-o">
                  <p>Player O</p>
                  <h2>{scores.O}</h2>
              </div>
          </div>

          <h2 className="game-status" aria-live="polite">{status}</h2>

          <div className="board">
              {board.map((cell, index) => (
                  <button
                      key={index}
                      className={`cell ${cell ? cell.toLowerCase() : ""}`}
                      onClick={() => handleClick(index)}
                      disabled={cell !== null || winner !== null || isDraw}
                      aria-label={`Cell ${index + 1}: ${cell || "Empty"}`}
                  >
                      {cell}
                  </button>
              ))}
          </div>
          
          <div className="actions">
              <button 
                  className="restart-button"
                  onClick={handleRestart}
              >
                  Restart Game
              </button>

              <button
                  className="reset-score-button"
                  onClick={handleResetScore}
              >
                  Reset Score
              </button>
          </div>
      </div>
  );
}

export default App;

