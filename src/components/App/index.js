import React, { Component } from "react";
// import logo from './logo.svg';
// import Intro from "../Intro";
import "./App.css";
import "whatwg-fetch";
import Main from "../Main";
// import Series from "../../containers/series";

// const Intro = props => <p>Our First functional Component</p>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tv Series app</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tv Series App
        </a> */}
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
