import { useState, useEffect } from "react";
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../firebase/config"


const useProductos = (categoriaId) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        
        const productosRef = collection(db, 'productos')
        const docsRef = categoriaId
                        ? query( productosRef, where('categoria', '==', categoriaId))
                        : productosRef
        getDocs(docsRef)
            .then(( querySnapshot ) => {
                const docs = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
                setProductos(docs)
            })
    }, [categoriaId])

    return {productos,
            categoriaId}
            
}

export default useProductos