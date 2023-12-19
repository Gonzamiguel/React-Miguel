import { ItemList } from "../ItemList";
import useProductos from "../hooks/useProductos";

export const ItemListContainer = () => {

const {productos} = useProductos()

    return (
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ItemList productos={productos} />
        </div>
    )
}
export default ItemListContainer;