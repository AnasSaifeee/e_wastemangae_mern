import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import Footer from './Footer'
import './CSS/home.css'
import './Dashboard'
import {Link} from "react-router-dom"

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./Images', false, /\.(png|jpe?g|svg)$/));
const Home = () => {
   
  return (
  <>
  <Navbar />
  <div>
  <div className="container-fluid m-0 p-0 mobliecontainer">
    <div className="container-fluid mobile-firstslide">
      <h1 style={{color: '#019934'}}>kabaad-e</h1>
      <p style={{color: '#216B3F'}}>Kabaad-e is an E-waste Management System designed to deal with the electronic waste produced at various levels and thereby reducing the incautious disposal of E-waste in India.</p>
      <a className="btn btn-lg registerbttn" href="https://console.dialogflow.com/api-client/demo/embedded/c87db62b-dcef-4c3b-a184-b6dc558a22a5" role="button" style={{color: 'white'}}>Chat with us</a>
    </div>
  </div>
  <div className="container-fluid p-0 m-0 mw-100 firstpart">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={images['banner.png']} className="d-block w-100 firstslideimage" alt="..." />
          <div className="text-start">
            <h1 className="slideoneheading" style={{marginLeft: 90}}>kabaad-e</h1>
            <p className="slideonepara">Kabaad-e is an E-waste Management System designed to deal with the electronic waste produced at various levels and thereby reducing the incautious disposal of E-waste in India.</p>
            <a className="btn btn-lg registerbttn" href="https://console.dialogflow.com/api-client/demo/embedded/c87db62b-dcef-4c3b-a184-b6dc558a22a5" role="button" style={{color: 'white', transform: 'translateX(-15px)'}}>Chat with us</a>
            <img className="image" src={images['banner.png']} alt="..." />
          </div>
        </div>
        <div className="carousel-item">
          <img src={images['banner.png']} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div className="container-fluid my-5">
    <div className="container" style={{width: '80%'}}>
      <img src={images['kabaade_cycle.png']} width="100%" alt />
    </div>
  </div>
  <div className="container-fluid my-3" style={{backgroundColor: 'rgb(212, 240, 181)'}}>
    <div className="container">
      <h1 className="services">Services</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 mw-100 p-0 m-0">
        <div className="col">
          <div className="card shadow-sm">
            <a href="searchngo">
              <img src={images['Schedule_pickup_sm.png']} className="d-block w-100" alt="..." />
            </a>
          </div>
          <h5>Connect with NGOs</h5><p>Organise events</p>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <a href>
              <img src={images['work_with_us_sm.png']} className="d-block w-100" alt="..." />
            </a>
          </div>
          <h5>Work With Us</h5><p>Be a Kabaade</p>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <a href="#">
              <img src={images['create_awareness_small.png']} className="d-block w-100" alt="..." />
            </a>
          </div>
          <h5>Create Awareness</h5><p>Know the Cause</p>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <a href="#">
              <img src={images['connect_with_us_small.png']} className="d-block w-100" alt="..." />
            </a>
          </div>
          <h5>Connect With Us</h5><p>join hands as an NGO</p>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <a href="#">
              <img src={images['your_impact_sm.png']} className="d-block w-100" alt="..." />
            </a>
          </div>
          <h5>Connect With Us</h5><p>join hands as an NGO</p>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
  </>
  )
}

export default Home
