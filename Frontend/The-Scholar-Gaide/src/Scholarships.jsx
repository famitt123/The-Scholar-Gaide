import "./App.css";
import { useState } from "react";
import { useRef } from "react";

export default function Scholarships() {
  const [scholarshipObjs, setScholarshipObjs] = useState([]); // Array of scholarship objects
  const [collapseList, setCollapseList] = useState(true); // If true, collapse the scholarship div and only show COLLAPSE_LIMIT scholarships.
  const COLLAPSE_LIMIT = 5; // Number of scholarships that can be shown if collapseList is true
  const MAX_NUM_OF_SCHOLARSHIPS = 1; // Max number of scholarships in scholarshipObjs
  const LINK_TEXT_BOX = useRef(null); // Text box to insert scholarship links with
  const LINK_ERROR_TEXT = useRef(null); // Error text beneath the text box
  const [showLinkErrorText, setShowLinkErrorText] = useState(false); // If true, show LINK_ERROR_TEXT.
  const [linkErrorTextContent, setLinkErrorTextContent] =
    useState("Placeholder");

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
      throw "scholarshipObj must not be null or undefined.";
    }

    if (scholarshipObjs.length === MAX_NUM_OF_SCHOLARSHIPS) {
      console.log(
        "The limit for the number of scholarships in the list has been reached."
      );
      return;
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

  const showLinkError = () => {
    setShowLinkErrorText(true);
    // Dismount LINK_ERROR_TEXT after 10 seconds
    const TIMEOUT = 10000; // 10 seconds
    const timeOutPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(), TIMEOUT);
    });
    timeOutPromise.then(() => setShowLinkErrorText(false));
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
        <label htmlFor="linkbox" style={{ marginRight: "1%" }}>
          Insert New Link:
        </label>
        <input
          type="text"
          id="linkbox"
          name="link"
          style={{ width: "40%", fontSize: "15px", borderRadius: "8px" }}
          ref={LINK_TEXT_BOX}
        ></input>
        <input
          type="button"
          className="insertScholarship"
          value="Insert"
          disabled={
            scholarshipObjs.length === MAX_NUM_OF_SCHOLARSHIPS ? true : false
          }
          onClick={() => {
            // Check if the LINK_TEXT_BOX is empty
            if (
              LINK_TEXT_BOX.current.value === "" ||
              LINK_TEXT_BOX.current.value === undefined ||
              LINK_TEXT_BOX.current.value === null
            ) {
              setLinkErrorTextContent(
                "The user has not provided a scholarship link."
              );
              showLinkError();
              console.log("The user has not provided a scholarship link.");
              return;
            }

            // Check if the value of the LINK_TEXT_BOX is a valid URL
            try {
              new URL(LINK_TEXT_BOX.current.value);
            } catch {
              setLinkErrorTextContent(
                "What you have entered into the text box is NOT a valid URL."
              );
              showLinkError();
              console.log("The value of the LINK_TEXT_BOX is NOT a valid URL.");
              return;
            }
            setShowLinkErrorText(false);
            addScholarship("TODO: REPLACE THIS STRING WITH A PROPER OBJ");
          }}
        ></input>
        <button
          className="insertScholarship"
          type="button"
          style={{ marginLeft: "0.1em" }}
          onClick={() =>
            addScholarship("TODO: REPLACE THIS STRING WITH A PROPER OBJ")
          }
          disabled={
            scholarshipObjs.length === MAX_NUM_OF_SCHOLARSHIPS ? true : false
          }
        >
          Find Scholarships
        </button>
        {showLinkErrorText ? (
          <p
            ref={LINK_ERROR_TEXT}
            style={{
              color: "rgb(190, 0, 0)",
              fontWeight: "bold",
              paddingBottom: "1%",
              marginTop: "0%",
              marginBottom: "0%",
            }}
          >
            {linkErrorTextContent}
          </p>
        ) : null}
      </div>
      <div className="scholarshipFlexbox">
        {scholarshipObjs.map((scholarship, index) => {
          if (collapseList && index > COLLAPSE_LIMIT - 1) {
            return null; // If collapseList is true, show only scholarships of index [0, COLLAPSE_LIMIT - 1].
          }
          return (
            <Scholarship
              key={index}
              index={index}
              name={scholarship.name}
              description={scholarship.description}
              link={scholarship.link}
              removeFunction={removeScholarship}
            />
          );
        })}

        {scholarshipObjs.length <= COLLAPSE_LIMIT ? null : (
          <button
            className="insertScholarship"
            type="button"
            onClick={toggleCollapseList}
          >
            {collapseList ? "Expand" : "Collapse"}
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * This Scholarship component has an "index" prop (corresponnding to the index in scholarshipObjs)
 * in order for the map function above to not throw errors.
 */
function Scholarship({ index, name, description, link, removeFunction }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Link: <a href={link}>{link}</a>
      </p>
      <button
        className="removeScholarship"
        type="button"
        style={{ marginLeft: "0.1em" }}
        onClick={() => removeFunction(index)}
      >
        Remove
      </button>
    </div>
  );
}
