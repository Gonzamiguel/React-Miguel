
import NavLinkConImagen from './NavLinkConImagen';
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';

export const Nav = () => { 

const links = [ 
    {
        label: "Hombre",
        href: "/productos/Hombre"
    },
    {
        label: "Mujer",
        href: "/productos/Mujer"
    },
    {
        label: "Niños",
        href: "/productos/Niños"
    }
]

    return (
        <nav className="fixed w-full top-0 flex justify-between items-center p-2 bg-blue-400"> 
            <Link
                to= "/"
                >
                <NavLinkConImagen/>
            </Link>
            <div className="flex items-center">
                <ul className="flex items-center gap-8 font-mono font-black tracking-wider">

                    {links.map((link) =>
                    <Link
                    key = {link.href}
                    to = {link.href}
                    >
                    {link.label}
                    </Link>
                    )}
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
};

export default Nav;