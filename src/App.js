import React from 'react';
import { Route } from 'react-router';
import Landing from './components/Landing';

const App = () => {
  return (
    <div>
        <Route component={Landing} path="/" exact />
    </div>
  );
};

export default App;