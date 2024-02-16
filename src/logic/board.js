import { WINNERS_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
  // Revisamos todas las combinaciones ganadoras para buscar un ganador
  for (const combo of WINNERS_COMBOS) {
    const [a, b, c, d] = combo; // Actualizamos la desestructuración para tomar en cuenta cuatro elementos en lugar de tres
    if (
      boardToCheck[a] && // Verificamos que la casilla 'a' no esté vacía
      boardToCheck[a] === boardToCheck[b] && // Comparamos si 'a' es igual a 'b'
      boardToCheck[a] === boardToCheck[c] && // Comparamos si 'a' es igual a 'c'
      boardToCheck[a] === boardToCheck[d] // Comparamos si 'a' es igual a 'd'
    ) {
      return boardToCheck[a]; // Retornamos el jugador que ha ganado
    }
  }
  return null; // Retornamos null si no hay ganador
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
