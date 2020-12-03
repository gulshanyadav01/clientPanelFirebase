import React, { Component } from 'react'
import AppNavbar from "./components/Layout/AppNavbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from "./components/Layout/Dashboard"
import store from "./Store/Store"
import { Provider } from "react-redux"; 
import AddClient from "./components/Client/AddClient"
import DetailClient from "./components/Client/DetailClient"; 
import EditClient from "./components/Client/EditClient";
import { UserIsAuthenticated, UserIsNotAuthenticated} from "./Helpers/Auth"
import Login from "./components/Auth/Login"


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
      <div>
        <AppNavbar/>
        <div>
        <Switch>
          <Route exact path = "/" component = {UserIsAuthenticated(Dashboard)}/>
          <Route exact path = "/client/add" component = {UserIsAuthenticated(AddClient)}/>
          <Route exact path = "/client/detail/:id" component = {UserIsAuthenticated(DetailClient)}/>
          <Route exact path = "/client/edit/:id" component = {UserIsAuthenticated(EditClient)}/>
          <Route exact path = "/login" component = {UserIsNotAuthenticated(Login)}/>
        </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    )
  }
}
export default App;