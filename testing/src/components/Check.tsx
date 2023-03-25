import { useState } from "react";
import "./check.css";

// @ts-nocheck
function Check({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) {
  const [isChecked, setIsChecked] = useState(false);

  const mode = primary ? "check--input--primary" : "check--input--secondary";
  return (
    <div
      className={["check--input", `check--input-${size}`, mode].join(" ")}
      style={{ backgroundColor: backgroundColor }}
      {...props}
    >
      <input
        type="checkbox"
        id="check"
        name="check"
        value="check"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />{" "}
      <label htmlFor="check">{label}</label>
      {isChecked && <span data-testid="span">Yes, is checked</span>}
    </div>
  );
}

export default Check;
