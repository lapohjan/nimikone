import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("https://lauratellervo.fi/namesorter/names.json")
      .then((r) => {
        const fetchedData = r.data.names;
        setData(fetchedData);
      })
      .catch((err) => console.log("error, no data found"));
  }

  console.table(data);

  const sortedData = data.slice().sort(function (a, b) {
    var textA = a.name;
    var textB = b.name;
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  console.table(data);

  const sortedData2 = data.slice().sort(function (a, b) {
    var numA = a.amount;
    var numB = b.amount;
    return numA > numB ? -1 : numA < numB ? 1 : 0;
  });

  console.table(data);

  const names = data.map((item, key) => {
    return (
      <tr key={key}>
        <td className="td-name">{item.name}</td>
        <td className="td-amount">{item.amount}</td>
      </tr>
    );
  });

  const sum = data
    .slice()
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );

  console.log(sum);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Solita Name Sorter</h1>
      </header>
      <div className="App-main">
        <div className="App-buttons">
          <button className="button1" onClick={(e) => setData(sortedData)}>
            Sort alphabetically
          </button>
          <button className="button2" onClick={(e) => setData(sortedData2)}>
            Sort by amount
          </button>
        </div>
        <div className="App-names">
          <p>Top names at Solita:</p>
        </div>
        <div>
          {names}
          <tr className="tr-sum">
            <td className="td-name">Sum: </td>
            <td className="td-amount">{sum}</td>
          </tr>
        </div>
      </div>
    </div>
  );
}

export default Search;