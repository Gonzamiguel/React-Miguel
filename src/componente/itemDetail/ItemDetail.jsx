import {useContext, useState} from "react";
import QuantitySelector from "./QuantitySelector";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const ItemDetail = ( {item} ) => {
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext (CartContext)

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }
        
        addToCart(itemToCart)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    return(

    <div className="flex flex-col justify-center text-center pt-8">
        <button className= "bg-blue-400" onClick={handleVolver}>Volver</button>
        <h3 className="mt-4 text-2xl font-bold">{item.titulo}</h3>
        <div className="flex pt-4">
            <img className="w-64 shadow-2xl m-6" src={item.imagen} alt={item.titulo} />
            <div>
                <p className="p-4 text-justify">{item.descripcion}</p>
                <p className="text-xl font-semibold">Precio: ${item.precio}</p>
                {
                    isInCart( item.id )
                        ? <button className="bg-blue-400 hover:bg-blue-500 border rounded p-2 m-4"><Link to="/cart">Terminar mi compra</Link></button>
                        : <>
                        <QuantitySelector
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                        />
                        <button className="border rounded p-2 bg-blue-400 hover:bg-blue-500" onClick={handleAgregar}>Agregar al carrito</button>
                        </>
                }
            </div>       
        </div>
                <div className="m-8 p-2">
                    <h3 className="text-3xl font-semibold">Quizas tambien te guste...</h3>
                </div>
                <hr />
    </div>
    )
}

export default ItemDetail