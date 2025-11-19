import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import scholarLogo from "./assets/temp_logo.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img
          src={scholarLogo}
          className="logo"
          alt="The mortarboard podium logo"
        />
      </div>
      <h1>
        The Scholar G
        <i>
          <u>ai</u>
        </i>
        de
      </h1>
      <div className="textbox essay">
        <p>
          Edit <code>src/App.jsx</code> and create a text box below for essays.
        </p>
      </div>
    </>
  );
}

export default App;
