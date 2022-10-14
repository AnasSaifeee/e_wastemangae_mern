import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/navbar.css'
const Footer = () => {
  return (
   <>
   <div className="container-fluid d-flex justify-content-center sec-1" style={{backgroundColor: 'rgb(199, 193, 193)'}}>
    <footer className="container-fluid py-5">
      <div className="container-fluid d-flex justify-content-center row">
        <div className="col-6 col-md-2 mb-3 sec-2 sec">
          <h2>EXTERNAL LINKS</h2>
          <ul className="lst nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lorem, ipsum.</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lorem, ipsum dolor.</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lorem ipsum dolor sit amet.</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lorem, ipsum.</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lorem, ipsum dolor.</a></li>
          </ul>
        </div>
        <div className=" col-6 col-md-2 mb-3 sec-3 sec">
          <h2>CONTACT</h2>
          <ul className="lst nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="bi bi-twitter" /> Twitter</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="bi bi-facebook" /> Facebook</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="bi bi-envelope" /> E-mail</a></li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top sec-3">
        <p>© 2022 TECHVIORS 2022, All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#">Terms of Service</a></li>
          <li className="ms-3"><a className="link-dark" href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  </div>


   </>
  )
}

export default Footer;
