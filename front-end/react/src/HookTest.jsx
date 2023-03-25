import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { ThemeContext } from "./contextTheme";

const reducer = (state, payload) => {
  const { type, value } = payload;
  switch (type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "power":
      return state * state;
    case "set_to_input":
      return +value;
    default:
      return state;
  }
};

function HookTest() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [textNumber, setTextNumber] = useState(0);
  const inputRef = useRef(null);
  const [state, payload] = useReducer(reducer, 0);

  useEffect(() => {
    const onFocus = () => {
      inputRef.current.style = "background-color: red";
    };
    inputRef.current.addEventListener("click", onFocus);

    return () => {
      inputRef.current.removeEventListener("click", onFocus);
    };
  }, [textNumber]);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);

    return () => {
      html.removeAttribute("data-theme");
    };
  }, [theme]);

  const handlePower = useCallback(() => {
    payload({ type: "power" });
  }, []);

  return (
    <>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
      <h1>Hook Test</h1>
      <h2>{state}</h2>
      <button onClick={() => payload({ type: "increment" })}>Increment</button>
      <button onClick={() => payload({ type: "decrement" })}>Decrement</button>
      <button onClick={handlePower}>Power</button>
      <input
        type="numbers"
        ref={inputRef}
        onChange={(e) => {
          payload({ type: "set_to_input", value: inputRef.current.value });
          setTextNumber(inputRef.current.value.split("").length);
        }}
      />
      {textNumber} Numbers
    </>
  );
}

export default HookTest;
