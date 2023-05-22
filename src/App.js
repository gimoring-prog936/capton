import React from "react";
import "./styles.css";
import ParkingMap from "./ParkingMap";

function App() {
  const [selected, setSelected] = React.useState(null);
  return (
    <div className="App">
      
      <ParkingMap setSelected={setSelected} />
    </div>
  );
}

export default App;
