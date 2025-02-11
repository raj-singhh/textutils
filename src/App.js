import {  useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light') //Whether dark mode is enabled or not

  const [alert , setAlert] = useState(null)
  



  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById('navbar').style.backgroundColor = '#f2f2f2';
      showAlert("Light mode enabled" , "success");
    }
    else{
      setMode('dark');

      document.body.style.backgroundColor = '#042743';
      document.getElementById('navbar').style.backgroundColor = 'black';
      
      showAlert("Dark mode has enabled" , "success");

    }}

    // calculation to get background color lighter than navbar-->

    const getLighterColor = (hex, percent = 30) => {
      // Ensure hex is valid and remove "#"
      hex = hex.replace(/^#/, "");
    
      // Convert 3-digit hex to 6-digit hex (e.g., #abc → #aabbcc)
      if (hex.length === 3) {
        hex = hex.split("").map((h) => h + h).join("");
      }
    
      // Ensure we have a valid 6-character hex code
      if (hex.length !== 6) {
        console.error("Invalid HEX color provided:", hex);
        return "#ffffff"; // Return white if invalid
      }
    
      // Convert hex to RGB
      let r = parseInt(hex.substring(0, 2), 16);
      let g = parseInt(hex.substring(2, 4), 16);
      let b = parseInt(hex.substring(4, 6), 16);
    
      // Increase brightness by percentage
      r = Math.round(r + (255 - r) * (percent / 100));
      g = Math.round(g + (255 - g) * (percent / 100));
      b = Math.round(b + (255 - b) * (percent / 100));
    
      // Ensure values stay within RGB range
      r = Math.min(255, r);
      g = Math.min(255, g);
      b = Math.min(255, b);
    
      // Convert back to HEX
      const toHex = (c) => c.toString(16).padStart(2, "0");
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };
    
   
    
  //change background color in dark mode -->


    const changeColor=(color)=>{
        if(mode === 'dark'){
          if(color === 'default'){
            document.body.style.backgroundColor = '#042743';
            document.getElementById('navbar').style.backgroundColor = 'black';
            return
          }
          document.body.style.backgroundColor = getLighterColor(color);
          document.getElementById('navbar').style.backgroundColor = color;
        }
        
    }
  

  const showAlert=(message , type)=>{
      setAlert({
        msg : message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }



  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} changeColor={changeColor} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* Home Route */}
          {/* <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} /> */}
          <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
          {/* About Route */}
          {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
