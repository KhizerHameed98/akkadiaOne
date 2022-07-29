import React from 'react';

const index = () => {
  return (
    <div
      style={{
        backgroundImage: `url(assets/images/bg-img.png)`,
        backgroundColor: '#000',
      }}
      className="launching-main-page-forth"
    >
      <div className="container-fluid">
        <div className="row padding">
          <div className="col-lg-12">
            <img
              style={{ float: 'left' }}
              src="assets/images/Logo.png"
              alt="logo"
            />
            <span style={{ float: 'left' }} className="mt-3">
              Username
            </span>
          </div>
        </div>
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
                  <button className=" begin-sequence">BEGIN SEQUENCE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#000',
        }}
        className="row"
      >
        <marquee className="scroll" behavior="scroll" direction="left">
          XV Unit Detection: Failed **REPORT IMMEDIATELY TO THE ODD OR THE
          NEAREST XENO VECTOR STATION FOR SERVICE** **LEGACY INTERFACE AND
          SERVICES ACTIVATED**
        </marquee>
      </div>
    </div>
  );
};

export default index;
