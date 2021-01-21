import React from 'react'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
import './Search.css';

function Search() {

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
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }

      useEffect(()=>{
        getData()
      },[])
      
      const [data,setData]=useState([]);


  return (
    <div>
      {
       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }
    </div>
  );
}

export default Search;