import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"

import "./styles/App.scss"
import "@fortawesome/fontawesome-free/js/all"
import "@fortawesome/fontawesome-free/css/all.css"
import Home from "./pages/Home"
import Album from "./pages/Album"
import Favorites from "./pages/Favorites"
import { persistor, store } from "./store"
import Navbar from "./components/Navbar"
import { PersistGate } from "redux-persist/integration/react"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/album" component={Album}/>
                <Route path="/favorites" component={Favorites}/>
              </Switch>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
