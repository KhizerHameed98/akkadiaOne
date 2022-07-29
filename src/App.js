import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Mianhome from './Components/Mainhome';
import browserRoute from './Routes/browserRoutes';
import PrivateRouteLogin from './Components/HOC/PrivateRouteLogin';
import Login from './Components/Authentication.js/Login';
import User from './Components/Welecomeuser/User';
import Loading from './Components/Loading';
import { Toaster } from 'react-hot-toast';
import Userhome from './Components/Userhome';
import EntanglementRequest from './Components/EntanglementRequest';
import EntanglementProgress from './Components/EntanglementProgress';
import EntanglementCompleted from './Components/EntanglementCompleted';
import EntanglementReceiver from './Components/EntanglementReceiver';

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
          <Route path="/loading" element={<Loading />}></Route>
          {/* <Route path="/userhome" element={<Userhome />}></Route> */}
          <Route
            path="/entanglement-request"
            element={<EntanglementRequest />}
          ></Route>
          <Route
            path="/entanglement-progress"
            element={<EntanglementProgress />}
          ></Route>
          <Route
            path="/entanglement-completed"
            element={<EntanglementCompleted />}
          ></Route>
          <Route
            path="/entanglement-receiver"
            element={<EntanglementReceiver />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
