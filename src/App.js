import React, { Component } from 'react'
import AppNavbar from "./components/Layout/AppNavbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from "./components/Layout/Dashboard"
import store from "./Store/Store"
import { Provider } from "react-redux"; 
import AddClient from "./components/Client/AddClient"
import DetailClient from "./components/Client/DetailClient"; 
import EditClient from "./components/Client/EditClient"


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
      <div>
        <AppNavbar/>
        <div>
        <Switch>
          <Route exact path = "/" component = {Dashboard}/>
          <Route exact path = "/client/add" component = {AddClient}/>
          <Route exact path = "/client/detail/:id" component = {DetailClient}/>
          <Route exact path = "/client/edit/:id" component = {EditClient}/>
        </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    )
  }
}
export default App;