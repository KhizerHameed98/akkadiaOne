import React from "react";

const index = () => {
  return (
    <div className="launching-main-page-forth">
      <div className="container-fluid">
        <div className="row padding">
          <div className="col-lg-12">
            <div className="d-flex flex-row align-items-center">
              <img
                src="assets/images/Logo.png"
                alt="logo"
                style={{ float: "left" }}
              />
              <span>Username</span>
            </div>
          </div>
        </div>
        <div className="background">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-block">
                  <div className="inner-text-block">
                    <h2>ENTANGLEMENT REQUEST</h2>
                    <h3>
                      YOU HAVE AN INCOMING TRANSMISSION FROM AN UNKNOWN SENDER
                      WOULD YOU LIKE TO ESTABLISH Q.E. SEQUENCE?
                    </h3>
                    <button className="begin-sequence">BEGIN SEQUENCE</button>
                  </div>
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
        <div className="row">
          <div className="col-lg-12">
            <img
              className="elipse"
              src="assets/images/Elipse.png"
              alt="Elipse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
