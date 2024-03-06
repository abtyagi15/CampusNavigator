import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { Signup } from './pages/Signup';
import Predict from './pages/Predict';
import { VerifyEmail } from './pages/VerifyEmail';
// import { useContext } from 'react';
// import { SignupContext } from './context/SignupContext';
import UserHome from './pages/UserHome';


function App() {
  // const contextState = useContext(SignupContext);
  // console.log("contextState",contextState);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/predict' element={<Predict/>} />
        <Route path='/verify-email' element={<VerifyEmail/>} />
        <Route path='/home' element={<UserHome/>} />
      </Routes>
    </>
  );
}

export default App;
