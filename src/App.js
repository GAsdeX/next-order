import React, { useContext, useEffect } from 'react';

import './App.css';
import { PrinterContext, PrinterProvider } from './context/PrinterContext';




const Printer = () => {
  const {print, setDevice, connect} = useContext(PrinterContext) 

  useEffect(() => {
    connect(['192.168.1.162', '9100'])
  }, [])

  return (
    <div>
      <button onClick={print}>
        Print test order
      </button>

    </div>
  )
}



function App() {
  return (
    <div className="App">
      <PrinterProvider>
        <Printer />
      </PrinterProvider>
    </div>
  );
}

export default App;
