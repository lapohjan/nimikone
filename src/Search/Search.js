import React, { useState, useEffect } from "react";
import axios from "axios";
import './Search.css';

function Search() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get("http://localhost:3000/names.json")
    .then((r) => {
      const fetchedData = r.data
      setData(fetchedData)

    })
    .catch((err) => console.log('error, no data found'))
  }

  console.table(data);
 

  const sortedData = data.slice().sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }
  );

  console.table(data);

  const sortedData2 = data.slice().sort(function(a, b) {
    var numA = a.amount;
    var numB = b.amount;
    return (numA > numB) ? -1 : (numA < numB) ? 1 : 0;
    }
  );

  console.table(data)

  const names = data.map((item, key) => {
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
        <button className="button4" onClick={(e) => setData(sortedData)}/>
        <button className="button4" onClick={(e) => setData(sortedData2)}/>
        <div>
          {names}
        </div>
      </div>
    </div>
  );
}

export default Search;