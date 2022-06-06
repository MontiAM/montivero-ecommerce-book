import React, { useContext, useState, useEffect } from 'react';
import './Nav.css';
import { FaAlignJustify } from "react-icons/fa";
import NavItem from "../NavItem/NavItem"
import IconShop from "../IconShop/IconShop"
import CardWidget from "../CardWidget/CardWidget"
import CartContext from '../../store/cart-context.jsx';

const Nav = () => {
    const cartCtx = useContext(CartContext)
    let items = cartCtx.totalCount()

    const [toggle, setToggle ] = useState(false)
    const [screen, setScreen ] = useState(window.innerWidth)

    const toggleMenu = () => {
        setToggle(!toggle)
    }

    useEffect( () => {
        const changeWidth = () => {
            setScreen(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
    <>
        <nav className='nav'>
            <IconShop/>
            { (toggle || screen > 770) && (
                <div className='nav__menu'>
                <ul className='nav__list'>
                    <NavItem link="J.K. Rowling"/>
                    <NavItem link="R.R. Tolkien"/>
                    <NavItem link='George R.R. Martin'/>
                    <NavItem link="Contactos"/>
                </ul>
            </div>
            )}
            <div className='nav__toggle'> 
                <button onClick={() => toggleMenu()}><FaAlignJustify/></button>
            </div>
            <CardWidget items={items}/>
        </nav>
    </>
  )
}

export default Nav;

