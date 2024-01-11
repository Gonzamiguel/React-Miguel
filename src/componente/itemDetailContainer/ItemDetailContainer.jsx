import { useEffect } from "react";
import { useState } from "react"
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();

    useEffect(( ) => {
        
        const docRef = doc(db, 'productos', id)

        getDoc( docRef )
            .then((docSnapshot) => {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }
                setItem(doc)
            })
    }, []);

    return(
    <div>
        {item && <ItemDetail item={item}/> }
    </div>
    )
}

export default ItemDetailContainer
