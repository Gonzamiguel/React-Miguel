import logo from '/src/assets/logo/adidas.webp'
import Navlink from './Navlink'
import { FaCartArrowDown } from "react-icons/fa"
import NavLinkConImagen from './NavLinkConImagen';



export const Nav = () => {
    return (
        <nav className="sticky flex justify-between items-center p-4 bg-slate-100"> 
            <div className="flex items-center">
                <NavLinkConImagen to={"/"} imageSrc={logo} imageAlt="Logo Adidas" />
            </div>
            <div className="flex items-center">
                <ul className="flex gap-8 font-mono font-black tracking-wider">
                    <li><Navlink href={"/hombre"} text={"Hombre"}/></li>
                    <li><Navlink href={"/mujer"} text={"Mujer"}/></li>
                    <li><Navlink href={"/chicos"} text={"Chicos"}/></li>
                </ul>
            </div>
            <div className="flex items-center font-mono font-black tracking-wider">
                <ul className="flex gap-4">
                    <li><Navlink href={"#"} text={"Buscador"}/></li>
                    <li><Navlink href={"#"} text={<FaCartArrowDown className='text-2xl'/>}/></li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;