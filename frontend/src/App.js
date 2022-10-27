import React from 'react';
import './App.css';
import DashboardNavbar from './components/Navbar';
import Navbar from './Navbar';
import { BrowserRouter, Route,Router,Routes  } from 'react-router-dom';
import Home from './Home';
import Homepage from './pages/Home';
import Notifications from './pages/Notifications';
import Schedule from './pages/Schedule';
import Profile from './Profile';
import Signin from './signin';
import Signup from './signup';
import Dashboard from './Dashboard';


function App() {

  return (
    <>

    {/* <Profile/> */}
    {/* <BrowserRouter> */}

    <BrowserRouter>

           <Navbar/>
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/notifications' element={<Notifications/>} />
          <Route path='/schedule' element={<Schedule/>} />
          
      </Routes>
      </BrowserRouter>

      <Signin />
    </>
  );
}

export default App;
