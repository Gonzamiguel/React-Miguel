import {motion} from "framer-motion"
import Efectos from './efectos'

export const Cards = () => {
    return (
        <div className="flex flex-wrap justify-center m-4 p-6 gap-5">
            <Efectos imageSrc={"../src/assets/cards/zapatilla1.png"} title={"Ultraboost 12"} subtitle={"Envío gratis"} />
            <Efectos imageSrc={"../src/assets/cards/zapatilla2.jpg"} title={"Ultraboost 12"} subtitle={"Envío gratis"} />
            <Efectos imageSrc={"../src/assets/cards/zapatilla3.jpg"} title={"Ultraboost 12"} subtitle={"Envío gratis"} />
            <Efectos imageSrc={"../src/assets/cards/zapatilla4.jpg"} title={"Ultraboost 12"} subtitle={"Envío gratis"} />
        </div>
    )
}

export default Cards