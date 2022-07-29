import React from "react";

import { Navigate } from "react-router-dom";

import { useContext, useEffect } from "react";
import { UberContext } from "../../context/index";

const PrivateRoute = ({ children, redirectLink }) => {
  const { account, hasNft } = useContext(UberContext);
  if (!account) {
    return <Navigate to={redirectLink} replace />;
  }

  return children;
};

export default PrivateRoute;
