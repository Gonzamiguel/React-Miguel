import React from "react";
import { Link } from "react-router-dom";


export const Navlink = ({href,text}) => {
    return (
        <Link to={href}>{text}</Link>
    )
};

export default Navlink;