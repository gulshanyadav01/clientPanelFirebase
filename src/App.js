import React, { Component } from 'react'
import AppNavbar from "./components/Layout/AppNavbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from "./components/Layout/Dashboard"
import store from "./Store/Store"
import { Provider } from "react-redux"; 

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
      <div>
        <AppNavbar/>
        <div className  = "">
        <Switch>
          <Route exact path = "/" component = {Dashboard}/>
        </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    )
  }
}
export default App;