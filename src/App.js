import React from 'react';

import { AppBody } from './components/AppBody';
import {PrinterProvider } from './context/PrinterContext';

import './assets/scss/main.scss';

function App() {
  return (
    <div className="App">
      <PrinterProvider>
        <AppBody />
      </PrinterProvider>
    </div>
  );
}

export default App;
