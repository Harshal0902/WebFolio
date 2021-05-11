import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader"

function App() {

const [loading, setLoading] = useState(true)

useEffect(() => {
  setTimeout(() => setLoading(false), 2000)
}, [])

  return (
    <>
    {loading === false ? (
      <Main />
      ) : (
        <Preloader />
      )}
      </>
  );
}

export default App;
