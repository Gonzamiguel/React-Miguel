import { useState, useEffect } from "react";
import pedirProductos from "../pedirProductos";

const useProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])
    return {productos}
}

export default useProductos