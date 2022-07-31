import React, { useContext, useEffect, useState } from 'react';
import * as THREE from 'three';
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
    allowed,
  } = useContext(UberContext);
  const [notAllowed, setNotAllowed] = useState(false);
  useEffect(() => {
    if (registeredAlready === false) {
      navigate('/Login');
    } else if (registeredAlready === true) {
      navigate('/user');
    }
  }, [registeredAlready]);

  useEffect(() => {
    if (allowed === false) {
      setNotAllowed(true);
    }
  }, [allowed]);

  // useEffect(() => {
  //   THREE.EffectComposer = function (renderer, renderTarget) {
  //     this.renderer = renderer;

  //     if (renderTarget === undefined) {
  //       var pixelRatio = renderer.getPixelRatio();

  //       var width = Math.floor(renderer.context.canvas.width / pixelRatio) || 1;
  //       var height =
  //         Math.floor(renderer.context.canvas.height / pixelRatio) || 1;
  //       var parameters = {
  //         minFilter: THREE.LinearFilter,
  //         magFilter: THREE.LinearFilter,
  //         format: THREE.RGBFormat,
  //         stencilBuffer: false,
  //       };

  //       renderTarget = new THREE.WebGLRenderTarget(width, height, parameters);
  //     }

  //     this.renderTarget1 = renderTarget;
  //     this.renderTarget2 = renderTarget.clone();

  //     this.writeBuffer = this.renderTarget1;
  //     this.readBuffer = this.renderTarget2;

  //     this.passes = [];

  //     if (THREE.CopyShader === undefined)
  //       console.error('THREE.EffectComposer relies on THREE.CopyShader');

  //     this.copyPass = new THREE.ShaderPass(THREE.CopyShader);
  //   };

  //   THREE.EffectComposer.prototype = {
  //     swapBuffers: function () {
  //       var tmp = this.readBuffer;
  //       this.readBuffer = this.writeBuffer;
  //       this.writeBuffer = tmp;
  //     },

  //     addPass: function (pass) {
  //       this.passes.push(pass);
  //     },

  //     insertPass: function (pass, index) {
  //       this.passes.splice(index, 0, pass);
  //     },

  //     render: function (delta) {
  //       this.writeBuffer = this.renderTarget1;
  //       this.readBuffer = this.renderTarget2;

  //       var maskActive = false;

  //       var pass,
  //         i,
  //         il = this.passes.length;

  //       for (i = 0; i < il; i++) {
  //         pass = this.passes[i];

  //         if (!pass.enabled) continue;

  //         pass.render(
  //           this.renderer,
  //           this.writeBuffer,
  //           this.readBuffer,
  //           delta,
  //           maskActive
  //         );

  //         if (pass.needsSwap) {
  //           if (maskActive) {
  //             var context = this.renderer.context;

  //             context.stencilFunc(context.NOTEQUAL, 1, 0xffffffff);

  //             this.copyPass.render(
  //               this.renderer,
  //               this.writeBuffer,
  //               this.readBuffer,
  //               delta
  //             );

  //             context.stencilFunc(context.EQUAL, 1, 0xffffffff);
  //           }

  //           this.swapBuffers();
  //         }

  //         if (pass instanceof THREE.MaskPass) {
  //           maskActive = true;
  //         } else if (pass instanceof THREE.ClearMaskPass) {
  //           maskActive = false;
  //         }
  //       }
  //     },

  //     reset: function (renderTarget) {
  //       if (renderTarget === undefined) {
  //         renderTarget = this.renderTarget1.clone();

  //         var pixelRatio = renderer.getPixelRatio();

  //         renderTarget.width = Math.floor(
  //           this.renderer.context.canvas.width / pixelRatio
  //         );
  //         renderTarget.height = Math.floor(
  //           this.renderer.context.canvas.height / pixelRatio
  //         );
  //       }

  //       this.renderTarget1 = renderTarget;
  //       this.renderTarget2 = renderTarget.clone();

  //       this.writeBuffer = this.renderTarget1;
  //       this.readBuffer = this.renderTarget2;
  //     },

  //     setSize: function (width, height) {
  //       var renderTarget = this.renderTarget1.clone();

  //       renderTarget.width = width;
  //       renderTarget.height = height;

  //       this.reset(renderTarget);
  //     },
  //   };

  //   THREE.MaskPass = function (scene, camera) {
  //     this.scene = scene;
  //     this.camera = camera;

  //     this.enabled = true;
  //     this.clear = true;
  //     this.needsSwap = false;

  //     this.inverse = false;
  //   };

  //   THREE.MaskPass.prototype = {
  //     render: function (renderer, writeBuffer, readBuffer, delta) {
  //       var context = renderer.context;

  //       // don't update color or depth

  //       context.colorMask(false, false, false, false);
  //       context.depthMask(false);

  //       // set up stencil

  //       var writeValue, clearValue;

  //       if (this.inverse) {
  //         writeValue = 0;
  //         clearValue = 1;
  //       } else {
  //         writeValue = 1;
  //         clearValue = 0;
  //       }

  //       context.enable(context.STENCIL_TEST);
  //       context.stencilOp(context.REPLACE, context.REPLACE, context.REPLACE);
  //       context.stencilFunc(context.ALWAYS, writeValue, 0xffffffff);
  //       context.clearStencil(clearValue);

  //       // draw into the stencil buffer

  //       renderer.render(this.scene, this.camera, readBuffer, this.clear);
  //       renderer.render(this.scene, this.camera, writeBuffer, this.clear);

  //       // re-enable update of color and depth

  //       context.colorMask(true, true, true, true);
  //       context.depthMask(true);

  //       // only render where stencil is set to 1

  //       context.stencilFunc(context.EQUAL, 1, 0xffffffff); // draw if == 1
  //       context.stencilOp(context.KEEP, context.KEEP, context.KEEP);
  //     },
  //   };

  //   THREE.ClearMaskPass = function () {
  //     this.enabled = true;
  //   };

  //   THREE.ClearMaskPass.prototype = {
  //     render: function (renderer, writeBuffer, readBuffer, delta) {
  //       var context = renderer.context;
  //       context.disable(context.STENCIL_TEST);
  //     },
  //   };
  // });

  return (
    <div>
      <div className="main-page">
        <div className="container-fluid">
          <div className="row padding">
            <div className="col-lg-12">
              <a href="/">
                <img
                  style={{ float: 'left' }}
                  src="assets/images/Logo.png"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 main-content">
                {/* <GlitchClip onHover={true}> */}
                <div className="main-content">
                  <img
                    src="assets/images/globle.gif"
                    alt="MOSHED"
                    height="350"
                  />
                  <div className="page-content"></div>
                </div>
                {/* </GlitchClip> */}

                {notAllowed ? (
                  <>
                    <button
                      className="establish-connection"
                      // onClick={connectMetamask}
                      style={{ cursor: 'not-allowed', backgroundColor: 'red' }}
                      disabled={true}
                    >
                      Access Denied
                    </button>
                  </>
                ) : (
                  <button
                    className="establish-connection"
                    onClick={connectMetamask}
                  >
                    <>Establish Connection</>
                    {loading && (
                      <i>
                        <Loader />
                      </i>
                    )}
                  </button>
                )}
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
