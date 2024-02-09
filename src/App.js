import './App.css';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginComponent/>}></Route>
        <Route path='/dashboard' element={<DashboardComponent/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
