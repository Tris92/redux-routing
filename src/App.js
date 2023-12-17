import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./Privateroute";
import createPrivateRoute from "./createprivateroute";

import About from "./components/About";
import Home from "./components/Home";
import Topics from "./components/Topics";

const store = createStore(x => x || { auth: true });

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-PrivateRoute">About-PrivateRoute</Link>
          </li>
          <li>
            <Link to="/about-createPrivateRoute">About-createPrivateRoute</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route
          path="/about-createPrivateRoute"
          {...createPrivateRoute({
            component: About
          })}
        />
        <PrivateRoute exact path="/about-PrivateRoute" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  </Provider>
  );
}

export default App;
