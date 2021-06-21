import React, { useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { isDark } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        for="dark"
        aria-label="Dark_Mode" 
        aria-labelledby="Dark_Mode"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
export default ToggleSwitch;
