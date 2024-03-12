
import './App.css';
import React from 'react';
import Home from './pages/home/index';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Contato from './pages/contato/contato';
import Fotos from './pages/Fotos/fotos';
import Detalhes from './pages/Detalhes/detalhes';
import Comentarios from './pages/comentarios/comentarios';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/contato' element = {<Contato />}/>
      <Route path='/fotos' element = {<Fotos />}/>
      <Route path='/comentarios' element = {<Comentarios />}/>
      <Route path='/detalhes/:id' element = {<Detalhes />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
