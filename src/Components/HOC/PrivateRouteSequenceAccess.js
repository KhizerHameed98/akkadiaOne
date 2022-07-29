import React from "react";

import { Navigate } from "react-router-dom";

import { useContext, useEffect } from "react";
import { UberContext } from "../../context/index";

const PrivateRouteAccess = ({ children, redirectLink }) => {
  const { account, hasNft, userInfo, tokenUri } = useContext(UberContext);
  if (!tokenUri || !userInfo.email) {
    return <Navigate to={redirectLink} replace />;
  }

  return children;
};

export default PrivateRouteAccess;
