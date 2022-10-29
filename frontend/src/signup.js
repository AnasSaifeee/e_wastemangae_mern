import React, { useState } from "react";
import "./CSS/signup.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = (e) => {
  let navigate = useNavigate();

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const [signupstatus, setSignupstatus] = useState("");

  const register = async(e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        role: role,
        password: password,
        confirmpassword: confirmpassword,
      }),
    }).then(async (response) => {
      let data = await response.json();
      console.log(data);
      if (data.message) {
        setSignupstatus(data.message);
        navigate("/Signin");
      } 
    });
  };

  return (
    <>
      <section className="wrapper">
        <div className="container">
          <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
            <form className="rounded bg-white shadow p-5">
              <h3 className="text-dark fw-bolder fs-4 mb-2">
                Create an Account
              </h3>
              <div className="text-muted fw-normal mb-4">
                Already have an Account?{" "}
                <a
                  href="/signin"
                  className="text-primary fw-bold text-decoration-none"
                >
                  Sign-In
                </a>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                <label htmlFor="floatingFullName">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  name="username"
                  placeholder="enter username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  name="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  type="text"
                  className="form-control"
                  id="role"
                  name="role"
                  style={{ textAlign: "center" }}
                  value={role}
                  onChange={(e) => setrole(e.target.value)}
                >
                  <option>Select Role</option>
                  <option value="Donator">Donator</option>
                  <option value="Junk Collector">Junk Collector</option>
                  <option value="NGO">NGO</option>
                  <option value="Office">Office</option>
                  <option value="Dealer">Dealer</option>
                  <option value="Recycling Plant">Recycling Plant</option>
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
                <span className="password-info mt-2">
                  Use 8 or more characters with atleast one letter,number &amp;
                  symbol.
                </span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingConfirmPassword"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => setconfirmpassword(e.target.value)}
                />
                <label htmlFor="floatingConfirmPassword">
                  Confirm Password
                </label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label ms-2" htmlFor="gridCheck">
                  I agree <a href="#">Terms &amp; Conditions</a>.
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary submi_btn w-100 my-4"
                onClick={(e) => register(e)}
              >
                Register
              </button>
            </form>
          </div>
        </div>
        <h1>{signupstatus}</h1>
      </section>
    </>
  );
};

export default Signup;
