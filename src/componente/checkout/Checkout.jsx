import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db} from "../../firebase/config";
import { collection, addDoc} from "firebase/firestore";



const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre:"",
        direccion:"",
        email:"",
    });

    const [orderId,setOrderId] = useState(null)


    const handleInputChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    const orden = {
        cliente: values,
        items: cart,
        total: totalCart(),
        fecha: new Date(),
        };

        const ordersRef = collection(db, 'orders')
        addDoc(ordersRef, orden)
            .then((doc) =>{
                setOrderId(doc.id)
                clearCart
            });
    };

    if (orderId) {
    return(
        <div class="flex flex-col justify-center text-center bg-black m-20 p-10 rounded-[20px] ">
                <h3 class=" text-white pb-2 text-xl font-bold sm:text-2xl">Gracias por tu compra</h3>
                <span class="bg-blue-400 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
                <p class="text-gray-400 mb-10 text-base leading-relaxed">
                    Tu codigo de orden es: {orderId}
                </p>
        </div>
        );   
    };


    return(
    <div className="container m-auto mt-20">
        <h3 className="text-4xl font-bold"> Checkout  </h3>

        <hr />
        <h4 className="text-2xl font-semibold flex justify-center items-center p-4"> Ingresa tus datos </h4>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-4 gap-4">
            <input 
            className="border rounded p-2" 
            type="text" 
            placeholder="Nombre" 
            value={values.nombre}
            onChange={handleInputChange}
            name="nombre" 
            />
            <input 
            className="border rounded p-2" 
            type="text" 
            placeholder="Direccion" 
            value={values.direccion}
            onChange={handleInputChange}
            name="direccion" 
            />
            <input 
            className="border rounded p-2" 
            type="text" 
            placeholder="Email" 
            value={values.email}
            onChange={handleInputChange}
            name="email" 
            />
            <button className="bg-blue-400 hover:bg-blue-500 border rounded p-2">Enviar</button>
        </form>
    </div>
    )
}

export default Checkout  