import React from 'react';
import { Route } from 'react-router';
import Landing from './components/Landing';
import MyLocation from './components/MyLocation';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FineDustConatiner from './container/FineDustConatiner';
import MyLocationContainer from './container/MyLocationContainer';
import SignInContainer from './container/SignInContainer';

const App = () => {
  return (
    <div>
        <Route component={Landing} path="/" exact />
        <Route component={MyLocationContainer} path="/my-location" exact />
        <Route component={SignUp} path="/sign-up" exact />
        <Route component={SignInContainer} path="/sign-in" exact />
        <Route component={FineDustConatiner} path="/fine-dust" exact />
    </div>
  );
};

export default App;