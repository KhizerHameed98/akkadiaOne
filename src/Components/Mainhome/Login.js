import React, { useState } from "react";
import Loader from "../Loader";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = () => {};

  return (
    <div>
      <div className="main-page">
        <div className="container-fluid">
          <div className="row padding">
            <div className="col-lg-12">
              <img
                style={{ float: "left" }}
                src="assets/images/Logo.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 main-content main-content-padding">
                <img
                  className="landing-logo"
                  src="assets/images/landing-logo.png"
                  alt="landing-logo"
                />
                <div className="main-content">
                  <input
                    className="user-name"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <br />
                  <input
                    className="email"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <button className="establish-connection">Gain Access</button>
              </div>
            </div>
          </div>
          <div className="row">
            <marquee className="scroll" behavior="scroll" direction="right">
              XV Unit Detection: Failed **REPORT IMMEDIATELY TO THE ODD OR THE
              NEAREST XENO VECTOR STATION FOR SERVICE** **LEGACY INTERFACE AND
              SERVICES ACTIVATED**
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
