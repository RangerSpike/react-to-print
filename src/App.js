import React, { useRef } from 'react';
import './App.css';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './componentToPrint';

function App() {

  const componentRef = useRef();

  return (
    <div>      
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
}

export default App;
