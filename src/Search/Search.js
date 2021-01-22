import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get("http://localhost:3000/names.json").then((r) => {
      const fetchedData = r.data;
      setData(fetchedData);
    });
  }
  console.log(data);
  console.table(data);
  console.log(typeof data);
  // console.log(data.names[0].name)

  const names = data.map((i) => {
    return <h1>{i.name}</h1>;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nimikone</h1>
      </header>
      <div className="App-main">
        <p>Everyone at Solita:{names}</p>
      </div>
    </div>
  );
}

export default Search;