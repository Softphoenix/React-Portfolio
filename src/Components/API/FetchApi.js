import React, { useState } from 'react'
import { useEffect } from 'react';

function FetchApi() {
    const [data, setData] = useState([  ])

    const apiGet = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json =>  {
            console.log(json);
            setData(json)
        })
    }
    useEffect(()=>{
         apiGet()
    },[])
  return (
    <div style={{textAlign: 'center '}}>
     My API <br/>
     {/* <button>Fetch API</button> <br /> */}
     {/* {JSON.stringify(data, null, 2)} */}

     <div>
        <ul>
                {data?.map((item) => (
                    <li key={item.id}>{item.userId}{item.title}</li>
                ))}
        </ul>
     </div>
    </div>
  )
}

export default FetchApi

