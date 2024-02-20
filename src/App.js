
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Commponents/Home';
import Menu from './Commponents/Menu';


function App() {
  
  return (
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/menu' element={<Menu />} />
  </Routes>)
  
}

export default App;
