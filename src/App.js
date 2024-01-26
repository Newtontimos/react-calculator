import "./App.css";
import { useState } from "react";

const App = () => {
  const [myValue, setMyValue] = useState(0);

  const secondFunc = (val) => {
    setMyValue(myValue - 10);
  };

  const superFunc = (val) => {
    setMyValue(myValue + val);
  };
  return (
    <div>
      {myValue}
      <button onClick={() => superFunc(5)}>add +5</button>
      <button onClick={() => superFunc(10)}>add +10</button>
      <button onClick={() => secondFunc(10)}>add -10</button>
      {myValue >= 50 ? "Big" : "Small"}
    </div>
  );
};

export default App;
