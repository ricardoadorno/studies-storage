import { Transition } from "react-transition-group";
import { useRef } from "react";

const duration = 200;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  transform: "translateX(-50px) translateY(-50px)",
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1, transform: "translateX(-50px) translateY(-50px)" },
  entered: { opacity: 1, transform: "translateX(0) translateY(0px)" },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Fade({ in: inProp, children }) {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

export default Fade;
