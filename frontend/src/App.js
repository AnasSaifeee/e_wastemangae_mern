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
import Cdashboard from './Collector Dashboard/components/Navbar'
import Chome from './Collector Dashboard/pages/Home'
import Cnotifications from './Collector Dashboard/pages/Notifications'


function App() {

  return (
    <>

    {/* <Profile/> */}
    {/* <BrowserRouter> */}

    <BrowserRouter>

           <Cdashboard/>
      <Routes>
          <Route path='/' exact element = {<Chome/>} />
          <Route path='/notifications' element = {<Cnotifications/>} />
    
      </Routes>
      </BrowserRouter>

      {/* <Signin /> */}
    </>
  );
}

export default App;
