import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import browserRoute from "./Routes/browserRoutes";
import PrivateRoute from "./Components/HOC/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <PrivateRoute exact path={browserRoute.HOME} component={Home} /> */}
        {/* <Redirect from="/" to={browserRoute.HOME} /> */}
        <Routes>
          <Route exact path={browserRoute.HOME} element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
