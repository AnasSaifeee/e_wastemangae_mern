import React from 'react';
import './App.css';
import DashboardNavbar from './Single user Dashboard/components/Navbar';
import Navbar from './Navbar';
import { BrowserRouter, Route,Router,Routes  } from 'react-router-dom';
import Home from './Home';
import Homepage from './Single user Dashboard/pages/Home';
import Notifications from './Single user Dashboard/pages/Notifications';
import Schedule from './Single user Dashboard/pages/Schedule';
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
          <Route path='/' exact element = {<Homepage/>} />
          <Route path='/signin' element = {<Signin/>} />
          <Route path='/signup' element = {<Signup/>} />
          <Route path='/Dashboard' element = {<Dashboard />} />
                
      </Routes>
      </BrowserRouter>

      <Signin />
    </>
  );
}

export default App;
