import React from 'react';
import { Route } from 'react-router';
import Landing from './components/Landing';
import Weather from './components/Weather';

const App = () => {
  return (
    <div>
        <Route component={Landing} path="/" exact />
        <Route component={Weather} path="/weather" exact />
    </div>
  );
};

export default App;