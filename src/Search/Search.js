import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [data, setData] = useState([])
  const [nameData, setNameData] = useState([])
  const [amountData, setAmountData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get("http://localhost:3000/names.json")
    .then((r) => {
      const fetchedData = r.data
      setData(fetchedData)

      const fetchedData2 = JSON.parse(JSON.stringify(fetchedData));
      setNameData(fetchedData2)

      const fetchedData3 = JSON.parse(JSON.stringify(fetchedData));
      setAmountData(fetchedData3)

    })
    .catch((err) => console.log('error, no data found'))
  }

  console.table(data);
  console.table(nameData);
  console.table(amountData);


  nameData.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

  amountData.sort(function(a, b) {
    var numA = a.amount;
    var numB = b.amount;
    return (numA > numB) ? -1 : (numA < numB) ? 1 : 0;
  });

  const names = data.map((item, key) => {
    return (
      <tr key={key}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
      </tr>
    );
  });

  const namesAlphabetical = nameData.map((item, key) => {
    return (
      <tr key={key}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
      </tr>
    );
  });

  const namesAmount = amountData.map((item, key) => {
    return (
      <tr key={key}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
      </tr>
    );
  });


console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nimikone</h1>
      </header>
      <div className="App-main">
        <p>Everyone at Solita:</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{names}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;