import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { Signup } from './pages/Signup';
import Predict from './pages/Predict';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/predict' element={<Predict/>} />
      </Routes>
    </>
  );
}

export default App;
