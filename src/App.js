import "./App.css";
import star from "./Path.png";
import Buttons from "./components/Button";
import SubmitButton from "./components/SubmitButton";
import Box from "./rating/Box";
import { useState } from "react";
function App() {
  const [showBox, setShowBox] = useState(true);
  const [selected, setSelected] = useState(false);
  function handleClick() {
    if (selected === false) {
      return;
    } else {
      setShowBox(false);
    }
  }
  const lists = [1, 2, 3, 4, 5];
  const getNumber = (item) => {
    setSelected(item);
  };
  return (
    <>
      {showBox ? (
        <div className="App">
          <div className="star-parent">
            <img className="star" src={star} alt="star" />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <Buttons lists={lists} getNumber={getNumber} />
          <SubmitButton onClick={handleClick} />
        </div>
      ) : (
        <Box selected={selected} />
      )}
    </>
  );
}

export default App;
