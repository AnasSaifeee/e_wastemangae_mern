import React, { useState } from 'react'
import './CSS/signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
const Signin = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    
  const register = () => {
    Axios.post("http://localhost:4000/signin", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
    
    <section className="wrapper">
  <div className="container">
    <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
      <form className="rounded bg-white shadow p-5"  onSubmit={register}>
        <h3 className="text-dark fw-bolder fs-4 mb-2">Sign-in</h3>
        <div className="text-muted fw-normal mb-4">
          Create a new Account? <a href="/signup" className="text-primary fw-bold text-decoration-none">Sign-In</a>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" value={email} onChange={(e)=>setemail(e.target.value)} />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingPassword" name="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>
          <span className="password-info mt-2">
            Use 8 or more characters with atleast one letter,number &amp; symbol.
          </span>
        </div>
        <button type="submit" className="btn btn-primary submi_btn w-100 my-4" onClick={register}>Login</button>
      </form>
    </div>
  </div>
</section>

    </>
  )
}

export default Signin