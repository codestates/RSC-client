import React from 'react';
import { Route } from 'react-router';
import Landing from './components/Landing';
import MyLocation from './components/MyLocation';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignInContainer from './container/SignInContainer';

const App = () => {
  return (
    <div>
        <Route component={Landing} path="/" exact />
        <Route component={MyLocation} path="/my-location" exact />
        <Route component={SignUp} path="/sign-up" exact />
        <Route component={SignInContainer} path="/sign-in" exact />
    </div>
  );
};

export default App;