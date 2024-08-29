import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import CadastroLocal from './pages/Cadastrolocal';
import MaisInformacoes from './pages/MaisInformacoes';
import Categoria from './pages/Categoria';
import PerfilUsuario from './pages/PerfilUsuario';
import ClientPrivateRoute from './components/Auth/ClientPrivateRoute';



function App() {
   return (
      <Routes>

         <Route exact path='/' element={
            <Home />
         }>
         </Route>

         <Route exact path='/cadastro' element={
            <Cadastro />
         }>

         </Route>
         <Route exact path='/MaisInformacoes' element={
            <MaisInformacoes />
         }>
         </Route>

         <Route exact path='/Login' element={
            <Login />
         }>
         </Route>


         <Route exact path='/CadastroLocal' element={
            <CadastroLocal />
         }>
         </Route>

         <Route exact path='/Categoria/:idLocal' element={
            <ClientPrivateRoute>
               <Categoria />
            </ClientPrivateRoute>
         }>
         </Route>

         <Route exact path='/PerfilUsuario' element={
            <ClientPrivateRoute>
               <PerfilUsuario />
             </ClientPrivateRoute>
         }>
         </Route>

         <Route exact path='/Sobre' element={
            <Sobre />
         }>
         </Route>

      </Routes>
   );
}

export default App;
