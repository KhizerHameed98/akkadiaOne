import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Mianhome from './Components/Mainhome';
import browserRoute from './Routes/browserRoutes';
import PrivateRoute from './Components/HOC/PrivateRoute';
import Login from './Components/Authentication.js/Login';
import Loading from './Components/Loading';
import User from './Components/Welecomeuser/User';
import Userhome from './Components/Userhome';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <PrivateRoute exact path={browserRoute.HOME} component={Home} /> */}
        {/* <Redirect from="/" to={browserRoute.HOME} /> */}
        <Routes>
          {/* <Route exact path={browserRoute.HOME} element={<Home />}></Route> */}
          <Route path="/mainhome" element={<Mianhome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/loading" element={<Loading />}></Route>
          <Route path="/userhome" element={<Userhome />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
