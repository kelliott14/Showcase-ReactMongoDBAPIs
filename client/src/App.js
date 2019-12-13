import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Book from "./pages/Books";
import Nav from "./components/Nav";
import SavedBook from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router >
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Book} />
          <Route exact path="/saved" component={SavedBook} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
