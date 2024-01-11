import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import trashIcon from "../../assets/trash.svg"
import {Link } from "react-router-dom"


const CartView = () => {
    const {cart, totalCart, clearCart, removeItem} = useContext(CartContext)

    return(
    <div className="p-10">
        <section className="container m-auto mt-8">
            <h1 className="flex justify-center text-center text-4xl font-semibold">Tu compra</h1>
            <ul>
                {
                    cart.map((item) => (
                        <li key={item.id} className=" flex m-10 p-4 ">
                            <img className="w-60 mr-36 shadow-2xl" src={item.imagen} alt={item.titulo} />
                            <div className=" flex flex-col justify-center text-center m-4">
                                <h3 className="text-2xl font-bold p-2">{item.titulo}</h3>
                                <p className="text-xl font-semibold p-2">${item.precio}</p>
                                <p className="text-xl font-semibold p-2">Cantidad:{item.cantidad}</p>
                                <button className="bg-blue-400 rounded w-8 p-2" onClick={() => removeItem(item.id)}>
                                    <img  src={trashIcon} alt="basurero" />
                                </button>
                                
                            </div>
                        </li>
                    ))
                }
            </ul>
            <h2 className="text-4xl font-semibold">Total:${totalCart()}</h2>
            <button className="bg-blue-400 m-2 p-2 rounded" onClick={clearCart}>Vaciar Carrito</button>

            <button className="bg-blue-400 m-2 p-2 rounded">
                <Link to="/checkout">Terminar mi compra</Link>
                </button>
                
        </section>
    </div>
    )
}

export default CartView