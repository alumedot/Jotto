import React from 'react';
import './App.css';

import Congrats from './Congrats';


const App = () => {
  return (
    <div className="App">
      <Congrats success={true} />
    </div>
  );
};

export default App;
