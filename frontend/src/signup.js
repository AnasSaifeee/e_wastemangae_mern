import React, { useState } from 'react'
import './CSS/signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
const Signup = () => {
    const [name,setname]=useState("")
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [role,setrole]=useState("")
    const [password,setpassword]=useState("")
    const [confirmpassword,setconfirmpassword]=useState("")
    
    // async function registerUser(e){
    //     e.preventDefault()

    //     const response=await fetch('http://localhost:4000/api/signup',{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json',
    //         },
    //         body:JSON.stringify({
    //             name,
    //             username,
    //             email,
    //             role,
    //             password,
    //             confirmpassword,    
    //         })
    //     })

    //     const data = await response.json()
    //     console.log(data)
    // }

  const register = () => {
    Axios.post("http://localhost:4000/signup", {
      name: name,
      username: username,
      email: email,
      role: role,
      password: password,
      confirmpassword: confirmpassword,
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
        <h3 className="text-dark fw-bolder fs-4 mb-2">Create an Account</h3>
        <div className="text-muted fw-normal mb-4">
          Already have an Account? <a href="/signin" className="text-primary fw-bold text-decoration-none">Sign-In</a>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="name" placeholder="Full Name" value={name} onChange={(e)=>setname(e.target.value)} />
          <label htmlFor="floatingFullName">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" name="username" placeholder="enter username" value={username} onChange={(e)=>setusername(e.target.value)} />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" value={email} onChange={(e)=>setemail(e.target.value)} />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <select type="text" className="form-control" id="role" name="role" style={{textAlign: 'center'}}>
            <option value={role} onClick
            ={(e)=>setrole(e.target.value)}>Select Role</option>
            <option value={role} onClick
            ={(e)=>setrole(e.target.value)}>Donator</option>
            <option value={role} onClick
            ={(e)=>setrole(e.target.value)}>Junk Collector</option>
            <option value={role} onClick
            ={(e)=>setrole(e.target.value)}>NGO</option>
            <option value={role} onClick
            ={(e)=>setrole(e.target.value)}>Office</option>
            <option value={role} onClick
            ={(e)=>setrole(e.target.value)}>Dealer</option>
            <option value={role} onClick
            ={(e)=>setrole(e.target.value)}>Recycling Plant</option>
          </select>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingPassword" name="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>
          <span className="password-info mt-2">
            Use 8 or more characters with atleast one letter,number &amp; symbol.
          </span>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingConfirmPassword" name="confirmpassword" placeholder="Confirm Password" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} />
          <label htmlFor="floatingConfirmPassword">Confirm Password</label>
        </div>
        <div className="form-check d-flex align-items-center">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label ms-2" htmlFor="gridCheck">
            I agree <a href="#">Terms &amp; Conditions</a>.
          </label>
        </div>
        <button type="submit" className="btn btn-primary submi_btn w-100 my-4" onClick={register}>Register</button>
      </form>
    </div>
  </div>
</section>

    </>
  )
}

export default Signup