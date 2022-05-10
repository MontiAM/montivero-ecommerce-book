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
                    <NavItem link="J.K. Rowling"/>
                    <NavItem link="R.R. Tolkien"/>
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

