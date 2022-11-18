import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpper = () => {
    let newText= text.toUpperCase()
    setText(newText)
  };
const handleLowor=()=>{
  let newText= text.toLowerCase();
  setText(newText)
}
const handleClear=()=>{
  let newText= ' ';
  setText(newText)
}
const handleSpace=()=>{
 let newText= text.split(' ').join();
 setText(newText) 
}
  const onUpper = (evevt) => {
    setText(evevt.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={onUpper}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button onClick={handleUpper} type="button" className="btn btn-primary bg-success ">Convert Uppercase</button>
      <button onClick={handleLowor} type="button" className="btn btn-primary mx-3">Convert Loworcase</button>
      <button onClick={handleClear} type="button" className="btn btn-primary bg-warning ">Clear Text</button>
      <button onClick={handleSpace} type="button" className="btn btn-primary mx-3">Remove S pace</button>
    </div>
    <div className="container my-4">
      <h2>Text Summery</h2>
      <p> {text.split(' ').length} Word and  {text.length}  charcter</p>
      <p>{0.008 * text.split(' ').length} Minitus needs </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
