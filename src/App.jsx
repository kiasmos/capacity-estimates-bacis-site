import "./style.scss";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sprint from "./pages/Sprint";
import { useState, useEffect } from "react";
import db from "./components/db.json";
import ContentApi from "./components/ContentApi";

function App() {
  const [mainData, setMainData] = useState(db);

  useEffect(() => {
    console.log(mainData);
  }, []);

  return (
    <ContentApi.Provider value={{ mainData, setMainData }}>
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
    </ContentApi.Provider>
  );
}

export default App;
