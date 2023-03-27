import { useState } from "react";

function StateAssignment1() {
  const [count, setCount] = useState(0);

  function handleadd() {
    setCount(count + 1);
  }
  return (
    <section>
      <button onClick={handleadd}>{count}</button>
    </section>
  );
}
export default StateAssignment1;
