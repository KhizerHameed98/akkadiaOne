import React, { useContext, useState, useEffect } from 'react';
import { UberContext } from '../../context';
import ReactDOM from 'react-dom';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';

const modalRoot = document.getElementById('modal-root');

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="overlay">{props.children}</div>,
    modalRoot
  );
};

const Index = () => {
  const { userInfo, tokenUri } = useContext(UberContext);
  const [open, setOpen] = useState(false);
  const [isGlitched, setIsGlitched] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsGlitched(true);
      setOpen(true);
    }, 60000);
  }, []);

  return (
    <>
      <GlitchSquiggly disabled={!isGlitched} baseFrequency={0.0099999}>
        <div className="launching-main-page-fifth">
          {open && (
            <Modal in={!open}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100vw',
                  height: '100vh',
                }}
              >
                <GlitchText
                  iterationCount="infinite"
                  component="h1"
                  disabled={!isGlitched}
                >
                  <p
                    style={{
                      color: 'red',
                      fontFamily: 'Aldrich',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '118px',
                      lineHeight: '142px',
                      textAlign: 'center',
                    }}
                  >
                    Connection
                    <br />
                    Lost
                  </p>
                </GlitchText>
              </div>
            </Modal>
          )}
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
                    <div>
                      <div className="inner-image-block">
                        <img
                          class="unanimated-mosheed"
                          src={tokenUri.image}
                          alt="animated-mosheed"
                          style={{ maxHeight: '385px' }}
                        />
                        <h3>{tokenUri.name}</h3>
                        <p>
                          The E.T.R Model X2-9A was designed by X5 under the
                          Akkadia Defense and Research Unity Program with the
                          goal to secure stellar distance communications. The
                          device used Quantum entanglement stability and
                          accuracy. THE X2-9A HAS THE CAPACITY OF 5 DIMENSIONAL
                          ENTANGLEMENT AND THE ABILITY TO ACCESS INFORMATION
                          DIRECTLY FROM THE HUMAN NEURAL CORTEX. IT CAN DISRUPT,
                          MANIPULATE OR INFLUENCE MOST UNITY SENTIENTS. FOR THIS
                          REASON THE X5-9A BEEN BANNED FROM ALL FEDERATION
                          OPERATIONS. ANY AND ALL CITIZENS IN POSSESSION OF A
                          ETR X2-9A WILL BE TERMINATED ON SIGHT. ALL X2-9A UNITS
                          HAVE BEEN DECOMMISSIONED AND USED FOR ITS RARE
                          COMPONENTS AS ENERGY RESOURCES.
                        </p>
                        {/* <p>{tokenUri.description}</p> */}
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
            {/* <div className="row">
            <marquee className="scroll" behavior="scroll" direction="right">
              XV Unit Detection: Failed **REPORT IMMEDIATELY TO THE ODD OR THE
              NEAREST XENO VECTOR STATION FOR SERVICE** **LEGACY INTERFACE AND
              SERVICES ACTIVATED**
            </marquee>
          </div> */}
          </div>
        </div>
      </GlitchSquiggly>
    </>
  );
};

export default Index;
