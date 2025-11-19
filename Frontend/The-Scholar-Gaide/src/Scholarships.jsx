import "./App.css";

export default function Scholarships() {
  return (
    <div>
      <p>
        Provide us with the links to your scholarships!<br></br>
        <i>or</i>
        <br></br>Let us find scholarships online that fit your essay the best!
      </p>
      <div class="scholarships">
        <form>
          <label htmlFor="linkbox">Insert New Link: </label>
          <input type="text" id="linkbox" name="link"></input>
        </form>
      </div>
    </div>
  );
}
