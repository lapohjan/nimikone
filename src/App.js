import React from "react";
import Search from "./Search/Search";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Search />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
