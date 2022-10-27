import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route,Routes  } from 'react-router-dom';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import Schedule from './pages/Schedule';
import Profile from './Profile';
import Signin from './signin';


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

      {/* <Signin /> */}
    </>
  );
}

export default App;
