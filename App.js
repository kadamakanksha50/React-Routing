import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/forgotpassword' Component={ForgotPassword}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
        <Route path='/dashboard/home' Component={Home}></Route>
        <Route path='/dashboard/about' Component={About}></Route>
        <Route path='/dashboard/services' Component={Services}></Route>
        <Route path='/dashboard/contact' Component={Contact}></Route>
        <Route path='*' Component={NotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;