import React from 'react'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
import './Search.css';

function Search() {
    const getData=()=>{
        fetch('data.json'
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
          });
      }
      useEffect(()=>{
        getData()
      },[])

  return (
    <div>
      
    </div>
  );
}

export default Search;