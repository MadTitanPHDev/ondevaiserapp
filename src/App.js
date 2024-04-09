import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Recantodospassaros from './pages/Recantodospassaros';


function App() {
  return (
    <Routes>
      <Route path='/' element = {
         <Home/>
      }>
      </Route>

      <Route path='/cadastro' element = {
        <Cadastro />
      }>

      </Route>
      <Route path='/Recantodospassaros' element = {
        <Recantodospassaros />
      }>

      </Route>
    </Routes>
  );
}

export default App;
