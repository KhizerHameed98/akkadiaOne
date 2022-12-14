import React, { useContext, useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { UberContext } from '../../context';
import { useNavigate } from 'react-router';

const Loading = () => {
  const { userInfo, hasNFT, getNft, tokenUri } = useContext(UberContext);
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();
  function move() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById('myBar');
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + '%';
        }
      }
    }
  }

  setTimeout(() => {
    setCounter(counter + 10);
  }, 1000);
  useEffect(() => {
    if (counter >= 99) {
      if (hasNFT === false) {
        navigate('/entanglement-request');
      } else if (hasNFT === true && tokenUri) {
        navigate('/entanglement-progress');
      }
    }
  }, [counter, hasNFT]);

  // useEffect(() => {
  //   if (hasNFT === false) {
  //     setTimeout(() => {
  //       navigate("/entanglement-request");
  //     }, 15000);
  //   } else {
  //     setTimeout(() => {
  //       navigate("/entanglement-progress");
  //     }, 15000);
  //   }
  // }, [hasNFT]);
  return (
    <div>
      <div onClick={move}>
        <div className="launching-main-page-third">
          <div className="container-fluid">
            <div className="row padding">
              <div className="col-lg-12">
                <div className="d-flex flex-row align-items-center">
                  <a href="/">
                    <img
                      style={{ float: 'left' }}
                      src="assets/images/Logo.png"
                      alt="logo"
                    />
                    <span>{userInfo.username}</span>
                  </a>
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
                        completed={counter}
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
