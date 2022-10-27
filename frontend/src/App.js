import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route,Routes  } from 'react-router-dom';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import Schedule from './pages/Schedule';
<<<<<<< HEAD
import Profile from './Profile';
=======
import Signin from './signin';
>>>>>>> 79cdc6a60fa8901562ba5d4477c9b4be1b704e41

function App() {
  return (
    <>
<<<<<<< HEAD
    {/* <Profile/> */}
    <BrowserRouter>
=======
    {/* <BrowserRouter>
>>>>>>> 79cdc6a60fa8901562ba5d4477c9b4be1b704e41
           <Navbar/>
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/notifications' element={<Notifications/>} />
          <Route path='/schedule' element={<Schedule/>} />
          
      </Routes>
      </BrowserRouter> */}

      <Signin />
    </>
  );
}

export default App;
