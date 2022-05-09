import './App.css';
import React, { useState } from 'react'
import JSONdata from './MOCK_DATA.json'

function App() {
  const [searchItem, setSearchItem] = useState("")

  function handelChange(e){
    setSearchItem(e.target.value)
  }

  return (
    <div className="App">
       <input type="text" placeholder='Search...' onChange={handelChange}/>
       <div className="display_grid">
            {JSONdata.filter((val)=>{
              if (searchItem === ""){
                return val
              }else if (val.first_name.toLowerCase().includes(searchItem.toLowerCase())){
                return val
              }
            }).map((val, key)=>{
              return(
                <div className='item' key={val.id}>
                  <h5>{val.first_name}</h5>
                  <h6>{val.last_name}</h6>
                  <p>{val.email}</p>
                  <p>{val.gender}</p>
                  <p>{val.ip_address}</p>
                </div>
              )
            })}
                

       </div>
    </div>
  );
}

export default App;
