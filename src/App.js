import React from 'react';
import { Route } from 'react-router';
import Landing from './components/Landing';
import MyLocation from './components/MyLocation';

const App = () => {
  return (
    <div>
        <Route component={Landing} path="/" exact />
        <Route component={MyLocation} path="/my-location" exact />
    </div>
  );
};

export default App;