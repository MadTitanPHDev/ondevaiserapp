import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Categoria from './pages/Categoria';

function App() {
  return (
    <Routes>
      <Route path='/' element = {
         <Home />
      }>
      </Route>

      <Route path='/categoria' element = {
         <Categoria />
      }>
      </Route>

    </Routes>
  );
}

export default App;
