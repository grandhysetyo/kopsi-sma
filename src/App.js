import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Bidang from "./pages/Bidang";
import Login from "./pages/Login";

import "./App.scss";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Beranda />
        </Route>
        <Route path="/bidang" exact>
          <Bidang />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
