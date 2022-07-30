import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { UberContext } from "../../context";

const User = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/loading");
    }, 5000);
  }, []);
  const { userInfo } = useContext(UberContext);

  const image = Math.floor(Math.random() * 69);
  console.log(image);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(assets/images/AkkadiaBackgorunds/${image}.png)`,
        }}
        className="launching-main-page"
      >
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
              <div className="col-lg-12">
                <div className="block">
                  <h2 className="text-start">Welcome {userInfo.username},</h2>
                  <div className="inner-block">
                    <div className="loading bar">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <img
                      className="rotating"
                      src="assets/images/welcome-logo.png"
                      alt="welcome-logo"
                    />
                  </div>
                </div>
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

export default User;
