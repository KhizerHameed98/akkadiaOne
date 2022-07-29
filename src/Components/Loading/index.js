import React, { useContext, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { UberContext } from "../../context";
import { useNavigate } from "react-router";

const Loading = () => {
  const { userInfo, hasNFT, getNft } = useContext(UberContext);
  const navigate = useNavigate();
  function move() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

  useEffect(() => {
    if (hasNFT === false) {
      setTimeout(() => {
        navigate("/entanglement-request");
      }, 5000);
    } else {
      setTimeout(() => {
        navigate("/entanglement-progress");
      }, 5000);
    }
  }, [hasNFT]);
  return (
    <div>
      <div onClick={move}>
        <div className="launching-main-page-third">
          <div className="container-fluid">
            <div className="row padding">
              <div className="col-lg-12">
                <div className="d-flex flex-row align-items-center">
                  <img
                    style={{ float: "left" }}
                    src="assets/images/Logo.png"
                    alt="logo"
                  />
                  <span>{userInfo.username}</span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="block">
                    <h2></h2>
                    <div className="inner-block-2">
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
                    </div>
                    <div id="myProgress">
                      <ProgressBar
                        completed={80}
                        bgColor="#ffffff"
                        height="10px"
                        isLabelVisible={false}
                        baseBgColor="#3A3A3A"
                        labelColor="#e8090"
                        maxCompleted={100}
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
    </div>
  );
};

export default Loading;
