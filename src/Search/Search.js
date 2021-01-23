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

  console.table(data);

  const names = data.map((item, key) => {
    return (
      <tr key={key}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nimikone</h1>
      </header>
      <div className="App-main">
        <p>Everyone at Solita:</p>
        <table className="table">
          <th>Name</th>
          <th>Amount</th>
          <tbody>{names}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;