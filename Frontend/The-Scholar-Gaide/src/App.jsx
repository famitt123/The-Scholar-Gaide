import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import scholarLogo from "./assets/temp_logo.jpg";
import minhPortrait from "./assets/Portraits/minh.jpg";
import divitPortrait from "./assets/Portraits/divit.jpg";
import EssayAnalysis from "./EssayAnalysis";
import "./App.css";

function App() {
  const [analysisAvailable, setAnalysisAvailable] = useState(true);

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
      <div className="essay">
        <p>Paste your essay here.</p>
        <form>
          <textarea
            name="essay"
            id="essay_textarea"
            rows={20}
            cols={60}
            style={{ fontSize: "18px" }}
            placeholder="Paste your essay in here."
          ></textarea>
          <br></br>
          <input
            type="submit"
            className="submitEssay"
            value={"Start analysis"}
          ></input>
        </form>
      </div>
      {!analysisAvailable ? null : <EssayAnalysis />}
      <hr></hr>
      <div className="devs">
        <h1>Meet the Devs!</h1>
        <div className="devsContainer">
          <div>
            <img src={minhPortrait} alt="Nhat Minh Phan's Portrait"></img>
            <h3>Nhat Minh Phan</h3>
            <p>Programmer, Designer</p>
          </div>
          <div>
            <img src={divitPortrait} alt="Nhat Minh Phan's Portrait"></img>
            <h3>Divit Asrani</h3>
            <p>Programmer</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <p>© The Scholar Gaide, 2025</p>
      <p>Devpost</p>
    </>
  );
}

export default App;
