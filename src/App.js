import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [redlight, setRedlight] = useState("");
  const [yellowlight, setYellowlight] = useState("");
  const [greelight, setGreenlight] = useState("");


  return (
    <div className="fondo">
      <div className="trafficTop"></div>
      <div className="container">
        <div className="semaforo">
          <button className={"btn btn-danger rounded-circle " + redlight} onClick={() => (setRedlight("active"), setYellowlight(""), setGreenlight(""))}>  </button>
          <button className={"btn btn-warning rounded-circle " + yellowlight} onClick={() => (setRedlight(""), setYellowlight("active"), setGreenlight(""))}>  </button>
          <button className={"btn btn-success rounded-circle " + greelight} onClick={() => (setRedlight(""), setYellowlight(""), setGreenlight("active"))}> </button>
        </div>
      </div>
    </div>
  );
}

export default App;
