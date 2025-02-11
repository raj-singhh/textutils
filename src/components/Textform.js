import React, { useState } from "react";

export default function Textform(props) {
  // const handleOnClick = () => {
  //   setText("");
  // };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleard!" , "success")
  };
  const handleUpClick = () => {
    // console.log('Uppercase was clikced -'+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase" , "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase" , "success")
  };

  const handleSenClick = () => {
    let newText = text
      .toLowerCase()
      .split(". ")
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");
    setText(newText);
    props.showAlert("Sentence capitalized successfully!" , "success")
  };
  const handleWorClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Words capitalized successfully!" , "success")
  };

  const handleResClick = () => {
    let newText = text.trim().split(/\s+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed!" , "success")
  };


  const handleSpkClick = () => {
    if (text.trim() !== "") {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    }
  };

  const handleCopyClick = () => {
    if (text.trim() !== "") {
      navigator.clipboard
        .writeText(text)
        .then(() => props.showAlert("Text copied to clipboard!" , "success"))
        .catch((err) =>console.error("Failed to copy" + err));
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log('On change')
  };
  const [text, setText] = useState("Enter text here");
  // text='new text' It is wrong way
  // setText('new text');
  return (
    <>
      <div style={{color: props.mode === "light" ? "black" : "white"}}>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3 ">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows={8}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#31373d",
                color: props.mode === "light" ? "black" : "white",
              }}
            ></textarea>
          </div>

          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>

          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>

          <button className="btn btn-primary mx-2" onClick={handleSenClick}>
            Capitalize Sentences
          </button>
          <button className="btn btn-primary mx-2" onClick={handleWorClick}>
            Capitalize Words
          </button>

          <button className="btn btn-primary mx-2" onClick={handleResClick}>
            Remove Extra Space
          </button>

          <button className="btn btn-primary mx-2" onClick={handleSpkClick}>
            Read me
          </button>

          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
            Copy Text
          </button>

          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>

        {/* <-- Summery Section --> */}

        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
          </p>
          <p>{0.008 * text.trim() === "" ? 0 : text.trim().split(/\s+/).length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text==='' ? "Enter something in the above textbox to preview it here " : text}</p>
        </div>
      </div>
    </>
  );
}
