import { useState } from "react";

export default function counter() {
  //HOOKS

  const [count, setCount] = useState(0);

  const [incrementBy, SetIncrementBy] = useState(0);

  function handleClick() {
    // setCount(count + 1);
    setCount(count + incrementBy);
  }
  function handleClickDec() {
    setCount(count - 1);
  }
  function increaseIncremenet() {
    SetIncrementBy(incrementBy + 2);
  }
  function decreaseDecremnet() {
    SetIncrementBy(incrementBy - 2);
  }
  return (
    <div>
      Count value is : {count}
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClickDec}>Decrement</button>
      <h1>We Are Inrementing the Value by 2 :{incrementBy}</h1>
      <button onClick={increaseIncremenet}>Increase Increment </button>
      <button onClick={decreaseDecremnet}>Decrease Decrement </button>
    </div>
  );
}
