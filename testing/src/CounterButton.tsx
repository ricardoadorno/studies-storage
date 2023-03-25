import React, { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [isOn, setIsOn] = useState(false);

  const handleClick = (mult = 1) => {
    setCount(count + 1 * mult);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Click me</button>
      <button onClick={() => handleClick(2)}>Click me x2</button>

      <p>You've clicked the button {count} times.</p>
      <input
        aria-label="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setInput("");
          setIsOn(false);
        }}
      >
        Clear
      </button>
      <button onClick={() => setIsOn(true)}>Toggle</button>
      {isOn && <div data-testid="heading">{input}</div>}
    </div>
  );
}

export default CounterButton;
