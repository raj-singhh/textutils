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
          <h1 className="mb-4">{props.heading}</h1>
          <div className="mb-3 ">
            <textarea 
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows={8}
              style={{
                backgroundColor: props.boxColor,
                color: props.mode === "light" ? "black" : "white",
              }}
              placeholder="Enter text here..."
            ></textarea>
          </div>

          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>

          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>

          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSenClick}>
            Capitalize Sentences
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleWorClick}>
            Capitalize Words
          </button>

          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleResClick}>
            Remove Extra Space
          </button>

          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpkClick}>
            Read me
          </button>

          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>
            Copy Text
          </button>

          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>

        {/* <-- Summery Section --> */}

        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
          </p>
          <p>{text.trim() === "" ? 0 : (0.008 * text.trim().split(/\s+/).length)} Minutes read</p>
          <h2>Preview</h2>
          <p>{text==='' ? "Nothing to preview " : text}</p>
        </div>
      </div>
    </>
  );
}
