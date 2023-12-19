import  Productos  from "../mock/data";

export const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve (Productos);
        }, 500)        
    })
}

export const pedirItemPorId = (id) => {
    return new Promise ((resolve, reject) => {
        
        const item = Productos.find((el) => el.id === id);

        if (item) {
            resolve(item)
        } else {
            reject ({
                error: "No se encontro el producto"
            })
        }
    })
} 

export default pedirProductos;