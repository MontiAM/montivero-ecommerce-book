import React from 'react';
import './Nav.css';
import { FaAlignJustify } from "react-icons/fa";
import NavItem from "../NavItem/NavItem"
import IconShop from "../IconShop/IconShop"
import CardWidget from "../CardWidget/CardWidget"

const Nav = () => {

    let items = 0
    return (
    <>
        <nav className='nav'>
            <IconShop/>
            <div className='nav__menu'>
                <ul className='nav__list'>
                    <NavItem href="#categories" link="Categorias"/>
                    <NavItem href="#top20" link="Top20"/>
                    <NavItem href="#contactos" link="Contactos"/>
                </ul>
            </div>
            <div className='nav__toggle'> 
                <a href="#"><FaAlignJustify/></a>
            </div>
            <CardWidget items={items}/>
        </nav>
    </>
  )
}

export default Nav;


// import React from 'react';
// import { FaBeer } from 'react-icons/fa';
// const Nav = () =>{
//   return <h3> Lets go for a <FaBeer />? </h3>
// }

// export default Nav;