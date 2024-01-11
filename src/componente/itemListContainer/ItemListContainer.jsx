import { useParams } from "react-router-dom";
import { ItemList } from "../itemList/ItemList";
import useProductos from "../../hooks/useProductos";
import Header from "../header/Header";

const ItemListContainer = () => {
const {categoriaId} = useParams ()
const {productos} = useProductos(categoriaId)

    return (
        <div>
            <Header/>
            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ItemList productos={productos} />
            </div>
        </div>
    )
}
export default ItemListContainer;