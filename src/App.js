import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from './pages/layout/layout';
import Main from './pages/main/main';
import NewBadge from './pages/NewBadge/NewBadge'
import Error from './pages/Error.jsx/Error'
import Signup from './pages/signup/signup'
function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
      <Route exact path="/" component={Main}> </Route>
      <Route exact path="/new" component={NewBadge}></Route>
      <Route exact path="/signup" component={Signup}></Route>      
      <Route component={Error}> </Route>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
