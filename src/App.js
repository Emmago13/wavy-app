import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import HomeScreen from "./Routes/Home";
import AboutScreen from "./Routes/About";
import SettingsScreen from "./Routes/Settings";
import { WavyContainer, WavyLink} from "react-wavy-transitions";
import "./App.css";



const App = () =>{
  return (
    <div>
      <WavyContainer />
      <Router>
        <nav>
          <WavyLink className="WavyLink" to="/home" waveColor="#f14964">
            Home
          </WavyLink>
          <WavyLink className="WavyLink" to="/about" waveColor="#1ac0a2">
            About
          </WavyLink>
          <WavyLink className="WavyLink" to="/settings" waveColor="#5c80bc">
            Settings
          </WavyLink>
        </nav>
        <Switch>
          <Route path="/about" exact component={AboutScreen} />
          <Route path="/settings" exact component={SettingsScreen} />
          <Route path="/home" exact component={HomeScreen} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  )
}


export default App;
