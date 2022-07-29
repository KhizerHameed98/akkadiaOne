import React from "react";

import { Navigate } from "react-router-dom";

import { useContext, useEffect } from "react";
import { UberContext } from "../../context/index";

const PrivateRouteSequence = ({ children, redirectLink }) => {
  const { account, hasNft, userInfo } = useContext(UberContext);
  if (hasNft === true || !userInfo.email) {
    return <Navigate to={redirectLink} replace />;
  }

  return children;
};

export default PrivateRouteSequence;
