import React, { useState, useEffect } from 'react'

const names = [
  {
    "name": "Ville",
    "amount": 24
  },
  {
    "name": "Anna",
    "amount": 6
  },
  {
    "name": "Antti",
    "amount": 22
  },
  {
    "name": "Sanna",
    "amount": 5
  },
  {
    "name": "Mikko",
    "amount": 19
  },
  {
    "name": "Minna",
    "amount": 5
  },
  {
    "name": "Timo",
    "amount": 18
  },
  {
    "name": "Satu",
    "amount": 5
  },
  {
    "name": "Tuomas",
    "amount": 16
  },
  {
    "name": "Tiina",
    "amount": 5
  },
  {
    "name": "Tero",
    "amount": 15
  },
  {
    "name": "Kati",
    "amount": 5
  },
  {
    "name": "Sami",
    "amount": 15
  },
  {
    "name": "Henna",
    "amount": 4
  },
  {
    "name": "Mika",
    "amount": 12
  },
  {
    "name": "Liisa",
    "amount": 4
  },
  {
    "name": "Janne",
    "amount": 12
  },
  {
    "name": "Paula",
    "amount": 4
  },
  {
    "name": "Petri",
    "amount": 11
  },
  {
    "name": "Suvi",
    "amount": 4
  }
]

function App() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('name');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        name: 'name',
        amount: 'amount',
      };
      const sortProperty = types[type];
      const sorted = [...names].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]); 

  return (
    <div className="App">
      <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="name">Names</option>
        <option value="amount">Amounts</option>
      </select>

      {data.map(item => (
        <div key={item.name} style={{ margin: '30px' }}>
          <div>{item.name}</div>
          <div>{item.amount}</div>
        </div>
      ))}
    </div>
  );
}

export default App;