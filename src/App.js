import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SingleWineInfoBox from "./components/SingleWineInfoBox";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <SingleWineInfoBox />
      <Footer />
    </div>
  );
}

export default App;
