import React from "react";
import {Link} from "react-router-dom";
import logo from '/src/assets/logo/adidas.webp';


const NavLinkConImagen = ({href,text}) => {

        return (
            <Link to={href}>
                <img className="w-10 h-10" src={logo} alt="Logo Adidas"/>
            </Link>
        )
    };
    

export default NavLinkConImagen;