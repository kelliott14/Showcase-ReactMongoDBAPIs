import React from "react";
import Book from "./pages/Books";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router >
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Book} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
