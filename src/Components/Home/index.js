import React from "react";
import { useNavigate } from "react-router-dom";

import { useContext, useEffect } from "react";
import { UberContext } from "../../context/index";
import RegisterForm from "./registerForm";
const Home = () => {
  const {
    pickup,
    setPickup,
    account,
    connectMetamask,
    getBalance,
    setFileImg,
    isValidOrNot,
    hasNFT,
  } = useContext(UberContext);
  const navigate = useNavigate();
  return (
    <div>
      <header className="App-header">
        <button
          type="button"
          style={{
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
            marginTop: "50px",
            padding: "20px",
            fontSize: "25px",
            fontWeight: "bold",
          }}
          onClick={connectMetamask}
        >
          Connect
        </button>
        {account && (
          <>
            <button
              type="button"
              style={{
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
                marginTop: "50px",
                padding: "20px",
                fontSize: "25px",
                fontWeight: "bold",
              }}
              onClick={getBalance}
            >
              getBalance of {account}
            </button>
            {hasNFT === false && (
              <>
                <RegisterForm />
              </>
            )}
          </>
        )}
      </header>
    </div>
  );
};

export default Home;
