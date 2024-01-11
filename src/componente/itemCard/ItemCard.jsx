import { Link } from "react-router-dom";


export const Item = ({producto}) => {
    return (
<div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 m-2 p-4'>
        <div className="flex items-center justify-center flex-col text-sm text-gray-600 ">
            <img className="w-60" src={producto.imagen} alt="" />
            <h2 className=" text-lg font-bold p-1">{producto.titulo}</h2>
            <p className=" text-base font-semibold">${producto.precio}</p>
            <Link className="bg-blue-400 hover:bg-blue-500 text-white font-bold p-2 m-4 rounded-full" to={`/item/${producto.id}`}>Ver mas</Link>
        </div>
</div>
    ) 
};

export default Item;

