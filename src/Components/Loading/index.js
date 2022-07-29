import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

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

const loading = () => {
  return (
    <div>
      <div onclick={move}>
        <div class="launching-main-page-third">
          <div class="container-fluid">
            <div class="row padding">
              <div class="col-lg-12">
                <div className="d-flex flex-row align-items-center">
                  <img
                    style={{ float: 'left' }}
                    src="assets/images/Logo.png"
                    alt="logo"
                  />
                  <span>Username</span>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="block">
                    <h2></h2>
                    <div class="inner-block-2">
                      <div class="loading bar">
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
            <div class="row">
              <marquee class="scroll" behavior="scroll" direction="right">
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

export default loading;
