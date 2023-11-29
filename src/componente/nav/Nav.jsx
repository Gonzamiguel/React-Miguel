import logo from '/src/assets/logo/adidas.webp'
import Navlink from './Navlink'
import { FaCartArrowDown } from "react-icons/fa"



export const Nav = () => {
    return (
        <nav className="sticky flex justify-between items-center p-4 bg-slate-100"> 
            <div className="flex items-center">
                <img className="w-10 h-10" src={logo} alt="Logo Adidas"/>
            </div>
            <div className="flex items-center">
                <ul className="flex gap-8 font-mono font-black tracking-wider">
                    <li><Navlink href={"#"} text={"Hombre"}/></li>
                    <li><Navlink href={"#"} text={"Mujer"}/></li>
                    <li><Navlink href={"#"} text={"Niños"}/></li>
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