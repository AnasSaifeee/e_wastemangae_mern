import React from 'react';
import './App.css';
import DashboardNavbar from './Single user Dashboard/components/Navbar';
import Navbar from './Navbar';
import { BrowserRouter, Route,Router,Routes  } from 'react-router-dom';
import Home from './Home';
import Notifications from './Single user Dashboard/pages/Notifications';
import Schedule from './Single user Dashboard/pages/Schedule';
import Profile from './Profile';
import Signin from './signin';
import Signup from './signup';
import Dashboard from './Single user Dashboard/components/Navbar';
import Guidelines from './guidelines';
import DashboardHome from './Single user Dashboard/pages/Home';

function App() {

  return (
    <>
    <BrowserRouter>
    
      <Routes>
          <Route path='/' exact element = {<Home/>} />
          <Route path='/signin' element = {<Signin/>} />
          <Route path='/signup' element = {<Signup/>} />
          <Route path='/Dashboard' element = {<Dashboard />} />
          <Route path='/guidelines' element = {<Guidelines />}/>
          <Route path='/schedule' element = {<Schedule />}/> 
          <Route path='/home' element = {<DashboardHome />}/>
          <Route path='/profile' element = {<Profile />}/>
          <Route path='/notifications' element = {<Notifications />}/>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
