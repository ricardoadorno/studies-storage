import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Fade from "./Components/Fade";
import "regenerator-runtime/runtime";

import Framer from "./Framer";

import { useWindowScroll } from "react-use";
import Speech from "./Components/Speech";
import Keyword from "./Components/Keyword";
import HookTest from "./HookTest";
import ThemeProvider from "./contextTheme";

function App() {
  const ref = useRef(null);
  useClickAway(ref, () => {
    setParagraph(text);
    setText("");
    setIsEditing(true);
  });

  const [isEditing, setIsEditing] = useState(true);
  const [text, setText] = useState("");
  const [paragraph, setParagraph] = useState("Lorem ipsum dolor sit amet.");
  const [inProp, setInProp] = useState(false);

  const { x, y } = useWindowScroll();

  return (
    <ThemeProvider>
      <div className="container">
        <HookTest />
        {/* <Speech /> */}
        {/* <Keyword />
      <article>
        <h1>My First React App</h1>

        <div
          style={{
            position: "relative",
          }}
        >
          {isEditing ? (
            <div
              style={{
                position: "absolute",
              }}
              onClick={(e) => {
                if (e.detail === 2) {
                  setIsEditing(false);
                  setText(paragraph);
                }
              }}
            >
              {paragraph}
            </div>
          ) : (
            <form
              ref={ref}
              onSubmit={(e) => {
                e.preventDefault();
                setParagraph(text);
                setText("");
                setIsEditing(true);
              }}
              style={{
                height: 0,
              }}
            >
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  height: "1rem",
                  position: "absolute",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  padding: 0,
                  margin: 0,
                  boxShadow: "none",
                }}
                type="text"
                aria-label="Name"
              />
            </form>
          )}
        </div>
      </article>
      <article>
        <div>
          <div>x: {x}</div>
          <div>y: {y}</div>
        </div>
        <Fade in={inProp}>
          <hgroup>
            <h4>Fade</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              similique.
            </p>
          </hgroup>
        </Fade>
        <div onClick={() => setInProp(true)}>Click to Enter</div>
      </article> */}

        {/* <article>
        <Framer />
      </article> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
