import React, { useContext, useState, useEffect } from 'react';
import { UberContext } from '../../context';
import ReactDOM from 'react-dom';

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

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 60000);
  }, []);

  return (
    <>
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
            </div>
          </Modal>
        )}
        <div className="container-fluid">
          <div className="row padding">
            <div className="col-lg-12">
              <div className="d-flex flex-row align-items-center">
                <a href="/">
                  <img src="assets/images/Logo.png" alt="logo" />
                  <span>{userInfo.username}</span>
                </a>
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
                      <p>{tokenUri.description}</p>
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
    </>
  );
};

export default Index;
