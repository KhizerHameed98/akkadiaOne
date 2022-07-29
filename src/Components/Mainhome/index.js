import React, { useContext, useEffect } from 'react';
import { UberContext } from '../../context/index';
import Loader from '../Loader';
import { useNavigate } from 'react-router';
const WalletScreen = () => {
  const navigate = useNavigate();
  const {
    pickup,
    setPickup,
    account,
    connectMetamask,
    getBalance,
    setFileImg,
    isValidOrNot,
    hasNFT,
    loading,
    registeredAlready,
  } = useContext(UberContext);

  useEffect(() => {
    if (registeredAlready === false) {
      navigate('/Login');
    } else if (registeredAlready === true) {
      console.log('hey page');
    }
  }, [registeredAlready]);

  return (
    <div>
      <div className="main-page">
        <div className="container-fluid">
          <div className="row padding">
            <div className="col-lg-12">
              <img
                style={{ float: 'left' }}
                src="assets/images/Logo.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 main-content">
                {/* <GlitchClip onHover={true}> */}
                <div className="main-content">
                  <img
                    src="assets/images/MOSHED.png"
                    alt="MOSHED"
                    height="300"
                  />
                  <div className="page-content"></div>
                </div>
                {/* </GlitchClip> */}
                <button
                  className="establish-connection"
                  onClick={connectMetamask}
                >
                  Establish Connection
                  {loading && (
                    <i>
                      <Loader />
                    </i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <marquee className="scroll" behavior="scroll" direction="left">
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

export default WalletScreen;
