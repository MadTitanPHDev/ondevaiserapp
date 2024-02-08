import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import CadastroLocal from './pages/Cadastrolocal';




function App() {
  return (
    <Routes>
      <Route path='/' element = {
         <Home />
      }>
      </Route>

      <Route path='/Login' element = {
         <Login />
      }>
      </Route>

      <Route path='/Sobre' element = {
         <Sobre />
      }>
      </Route>

      <Route path='/CadastroLocal' element = {
         <CadastroLocal />
      }>
      </Route>
      
    </Routes>
  );
}

export default App;
