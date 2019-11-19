import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';

function NavBar() {
    return (
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/plot-generator">Generators</Link>
                    </li>

                </ul>
                </nav>

                <Switch>
                <Route path="/plot-generator">
                    {/* <MoviePlot /> */}
                    <h1>Hi</h1>
                </Route>
                
                <Route path="/">
                    {/* <Home /> */}
                    <Home />
                </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default NavBar;
