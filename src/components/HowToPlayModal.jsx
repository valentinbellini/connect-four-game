
export function HowToPlayModal() {

    const closeHowToPlayModal = () =>{
        document.querySelector('.htp-modal').classList.remove('htp-modal-open')
      }

    return (
            <div className='htp-modal'>
                <h3> ¿Cómo jugar al 4 en línea ?</h3>
                <ul>
                   <li>Al comienzo del juego, se te asignará un turno para colocar una ficha en el tablero (X - O)</li> 
                   <li>Haz clic en una columna en la que desees colocar tu ficha.</li> 
                   <li>El juego alternará automáticamente entre los turnos de los jugadores.</li> 
                   <li>El primer jugador en formar una línea de cuatro fichas de su color gana la partida.</li>
                   <li>Si todas las casillas del tablero se llenan sin que ningún jugador forme una línea de cuatro fichas, la partida termina en empate.</li>
                </ul>
                <button onClick={closeHowToPlayModal}> Cerrar </button>
            </div>
    )
}