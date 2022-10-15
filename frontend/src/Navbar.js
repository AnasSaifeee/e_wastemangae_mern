import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/navbar.css'
import './signin'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./Images', false, /\.(png|jpe?g|svg)$/));
const Navbar = () => {
  return (
   <>
  <div>
  <nav className="navbar navbar-expand-lg navbar-light  nav-1">
    <div className="d-flex justify-content-end container-fluid nav-1a">
      <div className="d-flex justify-content-centre theme">
        <a className="nav-link theme theme-1 txt" aria-current="page" href="#">light</a>
        <div className="dash">|</div>
        <a className="nav-link theme theme-2 txt" aria-current="page" href="#">dark</a>
      </div>
      <div className="btn-A">
        <button className="btn A A1 txt" id="A1">A+</button>
        <button className="btn A A2 txt">A</button>
        <button className="btn A A3 txt">A-</button>
      </div>
      <div className="dropdown">
        <a className="btn dropdown-toggle language text-white txt" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          English
        </a>
        <ul className="dropdown-menu language-2" aria-labelledby="dropdownMenuLink">
          <li className="language-2a"><a className="dropdown-item language text-black" href="#">hindi</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <nav className="navbar navbar-expand-lg navbar-light  nav-2">
    <div className="container-fluid nav-2a">
      <img src={images['kabaade_logo_final.png']} className=" logo" alt="Avatar" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className=" collapse navbar-collapse nav-2b" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-2c">
          <li className="nav-item">
            <a className="nav-link text-white nav-2-text txt" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white nav-2-text txt" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white nav-2-text txt " href="/guidelines">User guidelines</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white nav-2-text txt " href="./signin">Login/Signup</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white nav-2-text txt" href="https://console.dialogflow.com/api-client/demo/embedded/c87db62b-dcef-4c3b-a184-b6dc558a22a5">FAQs</a>
          </li>
          <li>
          
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

   </>
  )
}

export default Navbar;
