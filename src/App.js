import React, { component } from 'react';
import './App.css';
import { Button } from 'element-react';

import 'element-theme-default';

import Email from './pages/email/email'
function App() {
  return (
    <div className="App">
      <Email/>
    </div>
  );
}

export default App;
