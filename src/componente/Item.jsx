import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export const Item = ({producto}) => {
    return (
<motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='border-2 border-lime-800 m-4 p-6'
>
        <div className="flex items-center justify-center flex-col ">
            <img className="w-72" src={producto.imagen} alt="" />
            <h2>{producto.titulo}</h2>
            <p>{producto.precio}</p>
            <Link to={'/item/${producto.id}'}>Ver mas</Link>
        </div>
</motion.div>
    )
    
};

export default Item;