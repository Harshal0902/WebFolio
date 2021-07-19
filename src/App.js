import { useState, useEffect } from "react";
import "./App.css";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Main from "./components/Main";

const override = css`
  display: block;
  margin: 30vh auto;
`;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    loading
      ?
      (<HashLoader css={override} color={'#55198b'} loading={loading} size={200} />)
      :
      (<Main />)
  );
}

export default App;
