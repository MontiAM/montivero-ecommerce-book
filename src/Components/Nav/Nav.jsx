import React, { useContext } from 'react';
import './Nav.css';
import { FaAlignJustify } from "react-icons/fa";
import NavItem from "../NavItem/NavItem"
import IconShop from "../IconShop/IconShop"
import CardWidget from "../CardWidget/CardWidget"
import CartContext from '../../store/cart-context.jsx';

const Nav = () => {
    const cartCtx = useContext(CartContext)
    let items = cartCtx.totalCount()

    const toggleMenu = () => {
        console.log('anda');
    }

    return (
    <>
        <nav className='nav'>
            <IconShop/>
            <div className='nav__menu'>
                <ul className='nav__list'>
                    <NavItem link="J.K. Rowling"/>
                    <NavItem link="R.R. Tolkien"/>
                    <NavItem link='George R.R. Martin'/>
                    <NavItem link="Contactos"/>
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

