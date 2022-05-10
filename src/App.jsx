import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home'
import Detail from './Pages/Detail/Detail';
import Cart from './Pages/Cart/Cart'

function App() {
  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/category/:categoryID' element={<Home/>} />
          <Route path='/item/:ID' element={<Detail />} />
        </Routes>
    </>
    
  );
}

export default App;
