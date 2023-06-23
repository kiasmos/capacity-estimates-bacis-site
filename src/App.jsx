import "./style.scss";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sprint from "./pages/Sprint";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/">
            <Sprint />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
