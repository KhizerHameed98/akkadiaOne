import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { UberContext } from "../../context";

const Index = () => {
  const { userInfo, tokenUri } = useContext(UberContext);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/entanglement-completed");
    }, 5000);
  }, []);
  return (
    <>
      <div className="launching-main-page-fifth">
        <div className="container-fluid">
          <div className="row padding">
            <div className="col-lg-12">
              <div className="d-flex flex-row align-items-center">
                <img src="assets/images/Logo.png" alt="logo" />
                <span>{userInfo.username}</span>
              </div>
            </div>
          </div>
          <div Name="background">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="image-block">
                    <div className="inner-image-block">
                      <img
                        className="unanimated-mosheed"
                        src="assets/images/animated-mosheed.png"
                        alt="animated-mosheed"
                        style={{ maxHeight: "429px" }}
                      />
                      <h3>ENTANGLEMENT LOCK IN PROGRESS</h3>
                      <p>26%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="row">
            <marquee className="scroll" behavior="scroll" direction="right">
              XV Unit Detection: Failed **REPORT IMMEDIATELY TO THE ODD OR THE
              NEAREST XENO VECTOR STATION FOR SERVICE** **LEGACY INTERFACE AND
              SERVICES ACTIVATED**
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
