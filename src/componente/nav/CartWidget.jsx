import { useContext } from "react"
import { Link } from "react-router-dom";
import CartIcon from "../../assets/cart.svg"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
    const { itemsInCart } = useContext(CartContext)
    
    return(
    <Link to="/cart" className="flex items-center pr-2 cursor-pointer">
        <img className="w-8"  src={CartIcon} alt="Carrito"/>
        <span className="text-black font-xl"> { itemsInCart() } </span>
    </Link>
    )
}

export default CartWidget