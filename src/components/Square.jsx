export const Square = ({children, isSelected, updateBoard, index})=>{

    const className = `square ${isSelected ? 'is-selected' : ''}` // Si es seleccionado, se aplica la clase para indicarlo.
    
    const handleClick = () =>{
      updateBoard(index) // Llamo a la funcion y le paso el indice para poder actualizar el baord
    }
    
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
}