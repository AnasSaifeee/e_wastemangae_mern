import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/signup.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Signin = (e) => {
  let navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [loginstatus, setLoginstatus] = useState("");

  const login = async(e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(async(response) => {
      let data = await response.json();
      console.log(data);
      if (data[0].message) {
        setLoginstatus(data.message);
      } else {
        navigate("/Profile");
      }
  });
  
  };

  return (
    <>
      <section className="wrapper">
        <div className="container">
          <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
            <form className="rounded bg-white shadow p-5">
              <h3 className="text-dark fw-bolder fs-4 mb-2">Sign-in</h3>
              <div className="text-muted fw-normal mb-4">
                Create a new Account?{" "}
                <a
                  href="/signup"
                  className="text-primary fw-bold text-decoration-none"
                >
                  Sign-Up
                </a>
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
              <button
                type="submit"
                className="btn btn-primary submi_btn w-100 my-4"
                onClick={(e) => login(e)}
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <h1>{loginstatus}</h1>
      </section>
    </>
  );
};

export default Signin;
