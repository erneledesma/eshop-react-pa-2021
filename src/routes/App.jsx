import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import CreateAccount from '../page/CreateAccount';
import Login from '../page/Login';
import RecoveryPassword from '../page/RecoveryPassword';
import Home from '../page/Home';
import NotFound from '../page/NotFound';
import '../styles/global.scss'

const App = () => {
    return ( 
        <BrowserRouter>
            <Layout>
              <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/create-account" component={CreateAccount} />
                    <Route exact path="/recovery-password" component={RecoveryPassword} />
                    <Route component={NotFound} />
              </Switch>
            </Layout>
        </BrowserRouter>
        
     );
}
 
export default App;