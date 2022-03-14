import "./App.css";
import Button from "../button/Button";
import StateButton from "../stateButton/StateButton";
import Mapping from "../mapping/Mapping";
import EmojiList from "../emojiList/EmojiList";
import GreetForm from "../greetForm/GreetForm";
import RenderJSON from "../renderJSON/RenderJSON.jsx";
import UserApi from "../userApi/UserApi";

function App(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log("You clicked a button.");
    alert("Clicked");
  }
  function handleReset(e) {
    // e.preventDefault();
    // console.log(`Fetch`);
    // alert(`Fetching data...`);
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
        <span>#5</span>
      </div>
      <div className="capture-6">
        <EmojiList />
        <span>#6</span>
      </div>
      <div className="capture-7">
        <GreetForm />
      </div>
      <div className="capture-8">
        <RenderJSON />
      </div>
      <button onClick={handleReset}>Reset users</button>
      <div className="capture-9">

      <UserApi />
      </div>
    </div>
  );
}

export default App;
