import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Detail from '../../Pages/Detail/Detail';
import Cart from '../../Pages/Cart/Cart';
import { AnimatePresence } from 'framer-motion/dist/framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home/>} />
                <Route path='/category/:categoryID' element={<Home/>} />
                <Route path='/item/:ID' element={<Detail />} />
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes