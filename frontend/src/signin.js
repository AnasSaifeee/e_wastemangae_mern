import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import Footer from './Footer'
import './CSS/home.css'
import './CSS/signin.css'
import './Dashboard'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./Images', false, /\.(png|jpe?g|svg)$/));
const signin = ('/signin', () => {
    return (
        <>
        <Navbar />
        <section class="wrapper">
        <div class="container">
            <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
                <form class="rounded bg-white shadow p-5" action='/signin' method = 'post'>
                    <h3 class="text-dark fw-bolder fs-4 mb-2">Sign-in</h3>
                    <div class="text-muted fw-normal mb-4">
                        New Here? <a href="/signup" class="text-primary fw-bold text-decoration-none">Create an Account</a>
                    </div>
                    
                    <div class="form-floating mb-3">
                       {/* <input type="text" class="form-control" id="floatingInput" name = "username" placeholder="username"> */}
                        <label for="floatingInput">username</label>
                    </div>
                    <div class="form-floating">
                        {/* <input type="text" class="form-control" id="floatingPassword" name = "password" placeholder="Password"> */}
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="mt-2 text-end">
                        <a href="#" class="text-primary fw-bold text-decoration-none">Forget Password?</a>
                    </div>
                    <a href=""><button type="submit" class="btn btn-primary submi_btn w-100 my-4">Continue</button></a> 
                </form>
            </div>
        </div>
    </section>
    <Footer />
        </>
    )
  
}) ; 
export default signin
