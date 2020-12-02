import React, { useState } from "react";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

require('dotenv').config()


function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />

        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          {/* <Route exact path="/saved">
            <Saved />
          </Route> */}
        </Switch>
      </div>

    </Router>

  );

}

export default App;