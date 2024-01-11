import Item from "../itemCard/ItemCard";

export const ItemList = ({productos}) => {
    return (
        <div className="flex flex-wrap justify-center item-center">
            {
                productos.length > 0 && 
                productos.map((producto) => {
                    return(
                        <Item key={producto.id} producto={producto}/>
                    )
                })
            }
        </div>
    )
};

export default ItemList;