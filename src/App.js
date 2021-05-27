import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from './pages/layout/layout';
import Main from './pages/main/main';
import NewBadge from './pages/NewBadge/NewBadge'
import Error from './pages/notfound/Error'
import Signup from './pages/signup/signup'
import Login from './pages/login/login'
function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
      <Route exact path="/" component={Main}> </Route>
      <Route exact path="/new" component={NewBadge}></Route>
      <Route exact path="/signup" component={Signup}></Route>  
      <Route exact path="/login" component={Login}></Route>     
      <Route component={Error}> </Route>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
