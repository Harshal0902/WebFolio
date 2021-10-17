import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class MyTerminal extends Component {
  showMsg = () => 'Hello World'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
  commands={{
    color: {
      method: (args, print, runCommand) => {
        print(`The color is ${args._[0] || args.color}`);
      },
      options: [
        {
          name: 'color',
          description: 'The color the output should be',
          defaultValue: 'white',
        },
      ],
    },
  }}
/>

      </div>
    );
  }
}

export default MyTerminal
