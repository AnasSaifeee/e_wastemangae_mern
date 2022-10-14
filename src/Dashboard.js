import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/bootstrap.min.css'
import './CSS/custom.css'
import './CSS/style.css'
import banner from './Images/banner';
const Dashboard = () => {
  return (
   <>
    <div className="wrapper">
  <div className="body-overlay" />
  {/* Sidebar  */}
  <nav id="sidebar">
    <div className="sidebar-header">
      <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" width="80px" className="rounded-circle" alt style={{marginLeft: 60}} />
      <button type="button" className="btn" style={{height: 25, lineHeight: 10, marginLeft: 35, transform: 'translateY(8px)', backgroundColor: 'grey', color: 'white'}}>Update
        Profile</button>
    </div>
    <ul className="list-unstyled components">
      <div className="small-screen navbar-display">
        <li className="dropdown d-lg-none d-md-block d-xl-none d-sm-block">
          <form className="d-flex ">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button type="button" className="btn btn-success" style={{height: 38, marginLeft: 2}}><i className="material-icons">search</i></button>
          </form>
        </li>
      </div>
      <li className="active">
        <a href="dashboard" className="dashboard"><i className="material-icons">dashboard</i><span>Overview</span></a>
      </li>
      <div className="small-screen navbar-display">
        <li className="dropdown d-lg-none d-md-block d-xl-none d-sm-block">
          <a href="/notifications">
            <i className="material-icons">notifications</i><span> 4 notifications</span></a>
        </li>
      </div>
      <li>
        <a href="#" className="dashboard"><i className="material-icons">data_saver_on</i><span>Contribution</span></a>
      </li>
      <li>
        <a href="#" className="dashboard"><i className="material-icons">fiber_manual_record</i><span>Present
            Status</span></a>
      </li>
      <li>
        <a href="dform" className="dashboard"><i className="material-icons">calendar_today</i><span>Pickup
            Schedule</span></a>
      </li>
      <li>
        <a href="#" className="dashboard"><i className="material-icons">local_shipping</i><span>Track E-waste</span></a>
      </li>
      <li>
        <a href="#" className="dashboard"><i className="material-icons">workspace_premium</i><span>Certifications</span></a>
      </li>
      <hr />
      <li>
        <a href="#" className="dashboard"><i className="material-icons">settings</i><span>Settings</span></a>
      </li>
      <li>
        <a href="#" className="dashboard"><i className="material-icons">logout</i><span>Logout</span></a>
      </li>
    </ul>
  </nav>
  {/* Page Content  */}
  <div id="content">
    <div className="top-navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="dashboard"> Contributor </a>
          <button className="d-inline-block d-lg-none ml-auto more-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="material-icons">more_vert</span>
          </button>
          <div className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <form className="d-flex " style={{transform: 'translateY(6px)'}}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="material-icons">search</span>
                </a>
              </li>
              <li className="nav-item ">
                <a href="/notifications">
                  <span className="material-icons">notifications</span>
                  <span className="notification">4</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link user-name" href="#">{'{'}{'{'}data.name{'}'}{'}'}
                  <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" width="30px" className="rounded-circle" alt />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
    <footer className="footer" style={{marginTop: '35rem'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <nav className="d-flex">
              <ul className="m-0 p-0">
                <li>
                  <a href="/">
                    Home
                  </a>
                  <div>
      <img src={banner} alt="BigCo Inc. logo"/>
    </div>
                </li>
                <li>
                  <a href="#">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-6">
            <p className="copyright d-flex justify-content-end"> © 2022 TECHVIORS, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

   </>
  )
}

export default Dashboard
