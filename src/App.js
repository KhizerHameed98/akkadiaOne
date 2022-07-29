import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Mianhome from "./Components/Mainhome";
import browserRoute from "./Routes/browserRoutes";
import PrivateRouteLogin from "./Components/HOC/PrivateRouteLogin";
import Login from "./Components/Authentication.js/Login";
import User from "./Components/Welecomeuser/User";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Router>
        {/* <PrivateRoute exact path={browserRoute.HOME} component={Home} /> */}
        {/* <Redirect from="/" to={browserRoute.HOME} /> */}
        <Routes>
          {/* <Route exact path={browserRoute.HOME} element={<Home />}></Route> */}
          <Route path={browserRoute.HOME} element={<Mianhome />}></Route>
          <Route
            path="/login"
            element={
              <PrivateRouteLogin redirectLink={browserRoute.HOME}>
                <Login />
              </PrivateRouteLogin>
            }
          ></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
