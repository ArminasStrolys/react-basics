import "./App.css";
import Button from "../button/Button";
import StateButton from "../stateButton/StateButton";
import Mapping from "./mapping/Mapping";

function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log("You clicked a button.");
    alert("Clicked");
  }
  return (
    <div className="App">
      <div className="capture-1">
        <p>Hello world! (#1)</p>
      </div>
      <div className="capture-2">
        <button onClick={handleClick}>Click me (#2)</button>
      </div>
      <div className="capture-3">
        <Button num="1" />
        <Button num="2" />
        <Button num="3" />
      </div>
      <div className="capture-4">
      <StateButton />
      </div>
      <div className="capture-5">
      <Mapping />
      </div>
    </div>
  );
}

export default App;
