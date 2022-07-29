import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { UberContext } from "../../context";

const Index = () => {
  const navigate = useNavigate();
  const { userInfo, tokenUri } = useContext(UberContext);
  useEffect(() => {
    setTimeout(() => {
      navigate("/entanglement-receiver");
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
                        class="unanimated-mosheed"
                        src={tokenUri.image}
                        alt="animated-mosheed"
                        style={{ maxHeight: "429px" }}
                      />
                      <h3>ENTAGLEMENT COMPLETE</h3>
                      <p> 100%</p>
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
