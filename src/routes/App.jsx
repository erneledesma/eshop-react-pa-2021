import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import CreateAccount from '../page/CreateAccount';
import Login from '../page/Login';
import RecoveryPassword from '../page/RecoveryPassword';
import Home from '../page/Home';
import NotFound from '../page/NotFound';
import AppContext from '../context/AppContext';
import '../styles/global.scss'
import useInitialState from '../hooks/useInitialState';

const App = () => {
   const initialState = useInitialState();
    return ( 
        <AppContext.Provider value={initialState} >
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
        </AppContext.Provider>
       

        
     );
}
 
export default App;