import React from "react";
import { Routes, Redirect } from "react-router";

import browserRoute from "../../Routes/browserRoutes";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isLoading,
  ...rest
}) => {
  return (
    <Routes
      {...rest}
      render={(props) =>
        // isAuthenticated || token ? (

        true || true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: browserRoute.HOME,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
