import'./App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart  from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailConatiner';


function App() {
  return (
    <>
   <BrowserRouter>
      <NavBar />
      <Routes>
        <Route  path='/' element={<ItemListContainer/>}/>
        <Route  path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
