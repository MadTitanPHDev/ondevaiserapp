import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';



function App() {
  return (
    <Routes>
      <Route path='/' element = {
         <Home />
      }>

      </Route>

      <Route path='Login' element = {
         <Login />
      }>

      </Route>
    </Routes>
  );
}

export default App;
