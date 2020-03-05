import React from "react";
import "./App.css";
import BodyBox from "./components/BodyBox";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div
      className='App'
     
    >
      <NavBar />
      <BodyBox />
      <Footer />
    </div>
  );
}

export default App;
