import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import CadastroLocal from './pages/Cadastrolocal';
import Recantodospassaros from './pages/Recantodospassaros';
import Categoria from './pages/Categoria';
import PerfilUsuario from './pages/PerfilUsuario'

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
      
      <Route path='/Categoria' element = {
         <Categoria />
      }>
      </Route>

      <Route path='/PerfilUsuario' element = {
         <PerfilUsuario />
      }>
      </Route>

      <Route path='/Sobre' element = {
         <Sobre />
      }>
      </Route>

    </Routes>
  );
}

export default App;
