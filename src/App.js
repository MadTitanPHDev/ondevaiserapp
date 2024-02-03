import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Sobre from './pages/Sobre';




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
      
    </Routes>
  );
}

export default App;
