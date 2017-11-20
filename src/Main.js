import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Characters from "./Characters/Characters";
import Planets from "./Planets/Planets";
import Species from "./Species/Species";
import Starships from "./Starships/Starships";
import Vehicles from "./Vehicles/Vehicles";
import Movies from "./Movies/Movies";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/Characters">Characters</NavLink></li>
            <li><NavLink to="/Planets">Planets</NavLink></li>
            <li><NavLink to="/Species">Species</NavLink></li>
            <li><NavLink to="/Starships">Starships</NavLink></li>
            <li><NavLink to="/Vehicles">Vehicles</NavLink></li>
            <li><NavLink to="/Movies">Movies</NavLink></li>

          </ul>
          <div className="content">
          <Route path="/Characters" component={Characters}/>
          <Route path="/Planets" component={Planets}/>
          <Route path="/Species" component={Species}/>
          <Route path="/Starships" component={Starships}/>
          <Route path="/Vehicles" component={Vehicles}/>
          <Route path="/Movies" component={Movies}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;
