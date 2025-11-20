import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

export default function Scholarships() {
  const [scholarshipObjs, setScholarshipObjs] = useState([]); // Array of scholarship objects
  const [collapseList, setCollapseList] = useState(true); // If true, collapse the scholarship div and only show COLLAPSE_LIMIT scholarships.
  const COLLAPSE_LIMIT = 5; // Number of scholarships that can be shown if collapseList is true

  /**************************************************************
   * ------------------ REMEMBER! ----------------------------
   * All scholarshipObjs must follow the syntax:
   * {
   *    name: <name>,
   *    description: <one-paragraph-description/summary>,
   *    link: <URL/hyperlink-to-the-scholarship-site>
   * }
   ***************************************************************/

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

  /**
   * Remove a scholarship from scholarshipObjs using a scholarshipKey.
   * scholarshipKey is the index in scholarshipObjs
   */
  const removeScholarship = (scholarshipKey) => {
    if (scholarshipKey < 0 || scholarshipKey >= scholarshipObjs.length) {
      throw "scholarshipKey is outside the bounds of scholarshipObjs";
    }
    const copy = [...scholarshipObjs];
    copy.splice(scholarshipKey, 1); // Removes 1 element starting from scholarshipKey
    setScholarshipObjs(copy);
  };

  const toggleCollapseList = () => {
    setCollapseList(!collapseList);
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
          <label htmlFor="linkbox" style={{ marginRight: "1%" }}>
            Insert New Link:{" "}
          </label>
          <input
            type="text"
            id="linkbox"
            name="link"
            style={{ width: "40%", fontSize: "15px", borderRadius: "8px" }}
          ></input>
          <input
            type="submit"
            className="insertScholarship"
            value="Insert"
          ></input>
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
          if (collapseList && index > COLLAPSE_LIMIT - 1) {
            return null; // If collapseList is true, show only scholarships of index [0, COLLAPSE_LIMIT - 1].
          }
          return (
            <Scholarship
              key={index}
              name={scholarship.name}
              description={scholarship.description}
              link={scholarship.link}
              removeFunction={removeScholarship}
            />
          );
        })}

        {scholarshipObjs.length <= COLLAPSE_LIMIT ? null : (
          <a
            className="expandCollapseText"
            onClick={toggleCollapseList}
            href="javascript:;"
          >
            {collapseList ? "Expand" : "Collapse"}
          </a>
        )}
      </div>
    </div>
  );
}

/**
 * This Scholarship component has a "key" prop (corresponnding to the index in scholarshipObjs)
 * in order for the map function above to not throw errors.
 */
function Scholarship({ key, name, description, link, removeFunction }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Link: <a href={link}>{link}</a>
      </p>
      <a
        className="scholarshipRemoveText"
        onClick={() => removeFunction(key)}
        href="javascript:;"
      >
        Remove
      </a>
    </div>
  );
}
