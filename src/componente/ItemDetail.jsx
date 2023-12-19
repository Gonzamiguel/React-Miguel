import React from "react";

const ItemDetail = ( {item} ) => {
    return(
    <div>
        <div>
            <img src={item.imagen} alt={item.titulo} />
        </div>
        <div>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
            <p>Categoria: {item.categoria}</p>
            <p>$ {item.precio}</p>
        </div>
    </div>
    )
}

export default ItemDetail