import { Square } from "./Square"

export function WinnerModal({winner, resetGame}) {
  
    if (winner == null) return null

    const winnerText = winner == false ? 'Empate' : 'Ganó' + winner

    const closeModal = () => {
      const modalElement = document.querySelector('.winner');
      if (modalElement) {
        modalElement.style.display = 'none';
      }
    };
    return (
            <section className='winner'>
                <div className='text'>
                  <h2>{winnerText}</h2>
                  <header className='win'>
                    {winner && <Square>{winner}</Square>}
                  </header>
  
                  <footer>
                    <button onClick={resetGame}> Empezar de nuevo </button>
                    <button onClick={closeModal}> Ver partida </button>
                  </footer>
  
                </div>
            </section>
    )
}