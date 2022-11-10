import React from "react"
import Header from "./components/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Culture from "./components/culture/Culture"
import Politics from "./components/politics/Politics"
import Sports from "./components/sports/Sports"
import Entertainment from "./components/entertainment/Entertainment"
import Admin from "./components/admin/Admin"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route exact path='/culture' component={Culture} />
          <Route exact path='/politics' component={Politics} />
          <Route exact path='/sports' component={Sports} />
          <Route exact path='/entertainment' component={Entertainment} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
