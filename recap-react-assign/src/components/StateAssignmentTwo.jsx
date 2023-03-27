import { useState } from "react";

function StateAssignment2() {
  const [num, setNum] = useState([]);

  function randomNum() {
    setNum([...num, Math.floor(Math.random() * 10)]);
  }
  return (
    <div>
      <button onClick={randomNum}>Click me!</button>
      {num.map((e) => {
        return <li>{e}</li>;
      })}
    </div>
  );
}
export default StateAssignment2;
