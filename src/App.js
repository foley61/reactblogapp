import Topbar from "./components/topbar/Topbar";
import { Context } from "./context/Context";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
function App() {
  const {user} = true;
  return (
    <Router>
      <Topbar />
      <Switch>
      <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/register">{user ? <HomePage /> : <Register />}</Route>
        <Route path="/login">{user ? <HomePage /> : <Login />}</Route>
  
      </Switch>
    </Router>
  );
}

export default App;
