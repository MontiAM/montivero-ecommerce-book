import './App.css';
import Nav from './Components/Nav/Nav'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <header className='header-app'>
        <Nav/>
      </header>
      <ItemListContainer/>
    </>
    
  );
}

export default App;
