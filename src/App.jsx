import './App.css';
import Nav from './Components/Nav/Nav'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

import ModalContainer from './Components/ModalContainer/ModalContainer';

function App() {
  return (
    <>
      <header className='header-app'>
        <Nav/>
      </header>
      <ItemListContainer/>
      <ModalContainer content={<div>Hola Mundo</div>}/>
    </>
    
  );
}

export default App;
