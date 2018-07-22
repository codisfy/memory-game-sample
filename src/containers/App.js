import React, { Component } from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./Navbar";
import Game from "./Game";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="game">
            <Navbar/>
            <Game/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
