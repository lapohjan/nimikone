import React from "react";
import Search from "./Search/Search";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="Wrapper">
        <Search />
        <div class="push"></div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
