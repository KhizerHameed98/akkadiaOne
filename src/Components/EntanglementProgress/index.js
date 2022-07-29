import React from 'react';

const index = () => {
  return (
    <>
      <div className="launching-main-page-fifth" id="bgid">
        <div className="container-fluid">
          <div className="row padding">
            <div className="col-lg-12">
              <div className="d-flex flex-row align-items-center">
                <img src="assets/images/Logo.png" alt="logo" />
                <span>Username</span>
              </div>
            </div>
          </div>
          <div Name="background">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="image-block">
                    <div
                      className="inner-image-block"
                      style={{ paddingBottom: '0' }}
                    >
                      <img
                        className="unanimated-mosheed"
                        src="assets/images/animated-mosheed.png"
                        alt="animated-mosheed"
                        width={400}
                      />
                      <h3>ENTANGLEMENT LOCK IN PROGRESS</h3>
                      <p>26%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 px-0">
            <img
              className="elipse"
              src="assets/images/Elipse.png"
              alt="Elipse"
            />
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
    </>
  );
};

export default index;
