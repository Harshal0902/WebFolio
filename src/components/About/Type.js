import React from "react";
import Typewriter from "typewriter-effect";
import Typical from 'react-typical'

function Type() {
  return (
      <Typewriter
        options={{
          strings: [
            "Web Developer",
            "Machine Learning enthusiast",
            "Open Source Contributor",
            "Mentor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
  );
}

export default Type;
