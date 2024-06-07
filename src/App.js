import logo from './logo.svg';
import './App.css';
import EmpAdd from './components/EmpAdd';
import EmpSearch from './components/EmpSearch';
import EmpDelete from './components/EmpDelete';
import ViewAll from './components/ViewAll';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={<EmpAdd/>}/>
    <Route path='/search' element={<EmpSearch/>}/>
    <Route path='/delete' element={<EmpDelete/>}/>
    <Route path='/view' element={<ViewAll/>}/>
  </Routes>

</BrowserRouter>
  );
}

export default App;
