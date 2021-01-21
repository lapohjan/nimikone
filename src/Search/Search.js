import React, {useState, useEffect} from "react";
// import axios from "axios";

// function Search() {
// 	const [data, setData] = useState([])

// 	console.log(data)

// 	useEffect(() => {
// 		fetchData()
// 	}, [])

// 	function fetchData() {
// 		axios.get(./names.json)
// 			.then(
//         r => {
// 				const fetchedData = r.data.acf
// 				setData(fetchedData)
// 			)
//   }
  
//   console.log(data.names);

function Search() {
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('names.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(nameJson) {
        console.log(nameJson);
        setData(nameJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  console.log(data)
  // console.log(data.names[0].name)

	return (
		<div className="App">
			<header className="App-header">
				<h1>Nimikone</h1>
			</header>
			<div>
				<p>
					Everyone at Solita:
				</p>
				<>
        {data.names.map((i) => <p>{i.name}</p>)}
					{/* {Object.keys(data).map((i, index) => {
						return (
							<div className={data} key={index}>
								{i} : {data[i]}
							</div>
						)
					})} */}
				</>
			</div>
		</div>
	);
}

export default Search;