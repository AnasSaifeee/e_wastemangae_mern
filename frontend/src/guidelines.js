import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/guidelines.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar'
import Footer from './Footer'

const Guidelines = (e) => {

  return (
    <>
    <Navbar />
      <section class="py-5 text-center container-fluid">
        <div class="row head py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">WHAT'S YOUR ROLE?</h1>
                {/* <br> */}
                <h2 class="fw-light registration">USER REGISTRATION</h2>
            </div>
        </div>
      </section>



    <div class="row cardrow row-cols-1 row-cols-md-2 row-cols-lg-3 g-3  ">
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img rounded-circle" width="157" height="157"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#FFFFFF"></rect><text x="50%" y="50%" fill="#777"
                        dy=".3em"></text>
                </svg>
                <div class="line1"></div>
                <div class="card-body">
                    <h5 class="card-title">E-Waste Donator</h5>
                    <p class="card-text"> Register as an E-waste donator & know how you can create an impact. Donate your E-waste to us just by uploading it here & we will pick it up from your doorsteps.</p>
                </div>

                <div class="button"><a href="#" class="btn btn-success butn">KNOW MORE</a></div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img rounded-circle" width="157" height="157"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#FFFFFF"></rect><text x="50%" y="50%" fill="#777"
                        dy=".3em"></text>
                </svg>
                <div class="line1"></div>
                <div class="card-body">
                    <h5 class="card-title">Junk Dealer</h5>
                    <p class="card-text">Connect with us & buy E-waste from the collectors near you. You can also sell E-waste to the Recycling plants. Get all these at a single, what else do you need? </p>
                </div>
                <div class="button"><a href="#" class="btn btn-success butn">KNOW MORE</a></div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img rounded-circle" width="157" height="157"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#FFFFFF"></rect><text x="50%" y="50%" fill="#777"
                        dy=".3em"></text>
                </svg>
                <div class="line1"></div>
                <div class="card-body">
                    <h5 class="card-title">Junk Collector</h5>
                    <p class="card-text">Be an employee. Get live updates about E-waste available in our locality. You can also request the Junk Dealers to buy your E-waste collections.</p>
                </div>
                <div class="button"><a href="#" class="btn btn-success butn">KNOW MORE</a></div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img rounded-circle" width="157" height="157"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#FFFFFF"></rect><text x="50%" y="50%" fill="#777"
                        dy=".3em"></text>
                </svg>
                <div class="line1"></div>
                <div class="card-body">
                    <h5 class="card-title">Recycling Plant</h5>
                    <p class="card-text">Connect with the Junk Dealers from different areas and get the best deal by comparing the prizes.</p>
                </div>
                <div class="button"><a href="#" class="btn btn-success butn">KNOW MORE</a></div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img rounded-circle" width="157" height="157"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#FFFFFF"></rect><text x="50%" y="50%" fill="#777"
                        dy=".3em"></text>
                </svg>
                <div class="line1"></div>
                <div class="card-body">
                    <h5 class="card-title">NGO</h5>
                    <p class="card-text">Connect with us & we can work together to spread awareness regarding E-waste management.</p>
                </div>
                <div class="button"><a href="#" class="btn btn-success butn">KNOW MORE</a></div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img rounded-circle" width="157" height="157"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#FFFFFF"></rect><text x="50%" y="50%" fill="#777"
                        dy=".3em"></text>
                </svg>
                <div class="line1"></div>
                <div class="card-body">
                    <h5 class="card-title">Authority</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt
                        ut labore adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div class="button"><a href="#" class="btn btn-success butn">KNOW MORE</a></div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Guidelines;
