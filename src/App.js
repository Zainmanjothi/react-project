
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import { BrowserRouter , Routes , Route } from 'react-router-dom';


function App() {
  return (
    <>
    <NavBar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    
    </>
  );
}

export default App;
