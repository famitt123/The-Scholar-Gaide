import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

export default function Scholarships() {
  const [scholarshipObjs, setScholarshipObjs] = useState([]);

  /**
   * All scholarshipObjs must follow the syntax:
   * {
   *    name: <name>,
   *    description: <one-paragraph-description/summary>,
   *    link: <URL/hyperlink-to-the-scholarship-site>
   * }
   */

  /**
   * The method below adds a scholarship object into scholarshipObjs
   */
  const addScholarship = (scholarshipObj) => {
    if (scholarshipObj === null || scholarshipObj === undefined) {
      throw "scholarshipObj must not be null or undefined";
    }

    const exampleObj = {
      name: "Famous Scholarship",
      description: "Description for this scholarship.",
      link: "link",
    };
    setScholarshipObjs(scholarshipObjs.concat(exampleObj));
    //setScholarshipObjs(scholarshipObjs.concat(scholarshipObj));
  };

  const scholarshipInterfaceStyle = {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: scholarshipObjs.length == 0 ? "10px" : "0px",
    borderBottomRightRadius: scholarshipObjs.length == 0 ? "10px" : "0px",
  };

  return (
    <div>
      <p>
        Provide us with the links to your scholarships!<br></br>
        <i>or</i>
        <br></br>Let us find scholarships online that fit your essay the best!
      </p>
      <div className="scholarships" style={scholarshipInterfaceStyle}>
        <form>
          <label htmlFor="linkbox">Insert New Link: </label>
          <input
            type="text"
            id="linkbox"
            name="link"
            style={{ width: "40%" }}
          ></input>
          <input type="submit" className="insertScholarship"></input>
          <button
            className="insertScholarship"
            type="button"
            style={{ marginLeft: "0.1em" }}
            onClick={() =>
              addScholarship("TODO: REPLACE THIS STRING WITH A PROPER OBJ")
            }
          >
            Find Scholarships
          </button>
        </form>
      </div>
      <div className="scholarshipFlexbox">
        {scholarshipObjs.map((scholarship, index) => {
          const key = Object;
          return (
            <Scholarship
              key={index}
              name={scholarship.name}
              description={scholarship.description}
              link={scholarship.link}
            />
          );
        })}
      </div>
    </div>
  );
}

/**
 * This Scholarship component has a "key" prop in order for the map function above to not throw errors.
 */
function Scholarship({ key, name, description, link }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Link: <a href={link}>{link}</a>
      </p>
    </div>
  );
}
