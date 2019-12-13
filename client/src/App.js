import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Book from "./pages/Books";
import Nav from "./components/Nav";
import SavedBook from "./pages/Saved";

function App() {
  return (
    <Router >
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Book} />
          <Route exact path="/saved" component={SavedBook} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
