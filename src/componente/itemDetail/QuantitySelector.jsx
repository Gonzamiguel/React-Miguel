

const QuantitySelector = ({cantidad, setCantidad}) => {

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }


    return(
        <div className="p-4">
            <button className="bg-blue-400 border rounded p-1 m-1" onClick={handleRestar}>-</button>
            <span>{cantidad}</span>
            <button className="bg-blue-400 border rounded p-1 m-1" onClick={handleSumar}>+</button>
        </div>
    )
}

export default QuantitySelector