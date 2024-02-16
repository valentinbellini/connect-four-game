import { useState } from 'react'
import confetti from 'canvas-confetti'

import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkEndGame, checkWinner } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/handleLocalStorage.js'


function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(36).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null) // null = No hay ganador y false = empate

  const resetGame = () => {
    // Primero setear los states a sus valores originales
    setBoard(Array(36).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {   // updateBoard se llama cada vez que se hace click en un square
    
    // No actualizamos la posición si ya se tiene algo, hay un ganador o si no hay nada en el square de abajo
    if (board[index] || winner || (index<30 && board[index+6] == null)) return

    // Actualizar el tablero
    const newBoard = [... board] // Se hace una copia superficial para evitar modificar el original (recordar que los estados son inmutables y para eso se utiliza el set)
    newBoard[index] = turn // Escribe en la copia del tablero una X u O en el array según cuadro tocado (identificado por el index)
    setBoard(newBoard) // Actualizamos el nuevo Board
    // Cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X // Toggle del turno por cada click en un square
    setTurn(newTurn)
    
    // Guardar partida en Local Storage
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    const gameEnded = newWinner || checkEndGame(newBoard); 
    if (gameEnded) {
      if (newWinner) {
          confetti();
          setWinner(newWinner);
          resetGameStorage()
      } else {
          setWinner(false); // empate
      }
    }
  }

  return (
    <main className='board'>
      <h1>4 RAYAS.</h1>
      <button onClick={resetGame}>Reiniciar Juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }

      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App
