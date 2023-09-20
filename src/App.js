import './App.css';
import Login from './components/Login';
import {BrowserRouter, Route,Routes}from 'react-router-dom'
import Register from './components/Register';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import TodoListContainer from './components/TodoLIstContainer';
import Weather from './components/Weather';
import Calculator from './components/Calculator';


function App() {
  return (
    <>
    
    <BrowserRouter>
       
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/list' element={<TodoListContainer/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/cal' element={<Calculator/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
