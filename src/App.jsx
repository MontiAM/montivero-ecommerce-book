import React from 'react'
// import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Header from './Components/Header/Header';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <Header/>
      {/* <ItemListContainer griting="Mi lista de productos"/> */}
      <ItemDetailContainer />
    </>
    
  );
}

export default App;
