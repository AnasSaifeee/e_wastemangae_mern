import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import Footer from './Footer'
import './CSS/home.css'
import './CSS/signup.css'
import './Dashboard'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./Images', false, /\.(png|jpe?g|svg)$/));
const signup = ('/signup', () => {
    return (
        <>
        <Navbar />
        <section class="wrapper">
        <div class="container">
            <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
                <form class="rounded bg-white shadow p-5" action="/signup" method = "post">
                    <h3 class="text-dark fw-bolder fs-4 mb-2">Create an Account</h3>
                    <div class="text-muted fw-normal mb-4">
                        Already have an Account? <a href="/signin" class="text-primary fw-bold text-decoration-none">Sign-In</a>
                    </div>
                    
                    <div class="form-floating mb-3">
                        {/* <input type="text" class="form-control" name = "name" id="floatingFullName" placeholder="Full Name"> */}
                        <label for="floatingFullName">Full Name</label>
                    </div>

                    <div class="form-floating mb-3">
                        {/* <input type="text" class="form-control" id="floatingInput" name = "username" placeholder="enter username"> */}
                        <label for="floatingInput">Username</label>
                    </div>

                    <div class="form-floating mb-3">
                        {/* <input type="text" class="form-control" id="floatingInput" name = "email" placeholder="name@example.com"> */}
                        <label for="floatingInput">Email</label>
                    </div>

                    <div class="form-floating mb-3">
                        <select type="text" class="form-control" id="role" name = "role"  style="text-align: center; ">
                          <option value="NULL">Select Role</option>
                          <option value="Donator">Donator</option>
                          <option value="Junk Collector">Junk Collector</option>
                          <option value="NGO">NGO</option>
                          <option value="Office">Office</option>
                          <option value="Dealer">Dealer</option>
                          <option value="Recycling Plant">Recycling Plant</option>
                        </select>
                      </div>

                    <div class="form-floating mb-3">
                        {/* <input type="text" class="form-control" id="floatingPassword" name = "password" placeholder="Password"> */}
                        <label for="floatingPassword">Password</label>
                        <span class="password-info mt-2">
                            Use 8 or more characters with atleast one letter,number & symbol.
                        </span>
                    </div>

                    <div class="form-floating mb-3">
                        {/* <input type="text" class="form-control" id="floatingConfirmPassword" name = "confirmpassword" placeholder="Confirm Password"> */}
                        <label for="floatingConfirmPassword">Confirm Password</label>
                    </div>

                    <div class="form-check d-flex align-items-center">
                        {/* <input class="form-check-input" type="checkbox" id="gridCheck"> */}
                        <label class="form-check-label ms-2" for="gridCheck">
                          I agree <a href="#">Terms & Conditions</a>.
                        </label>
                      </div>
                   
                    <button type="submit" class="btn btn-primary submi_btn w-100 my-4">Continue</button>
                </form>
            </div>
        </div>
    </section>
    <Footer />
        </>
    )
  
}) ; 
export default signup
