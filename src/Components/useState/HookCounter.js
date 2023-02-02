import React, { useState } from 'react'
import styled from 'styled-components'


function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const handleDecrement = () => {
      setCount(prevCount => Math.max(prevCount - 5, 0))
    }
     
    // const incrementFive = () => {
    //     for (let i = 0; i< 5; i++) {
    //         setCount(prevCount => prevCount + 1)
    //     }
    // }
    // const incrementFive = () => setCount(incrementFive + 5)
    const incrementFive = () => setCount(prevCount => prevCount + 5)

  return (
    <Containerss>
       <button onClick={() => setCount(initialCount)}>Reset</button>
       {/* <button onClick={() => setCount(count ? count - 1 : '')}>Decrement</button>  */}
       <button onClick={handleDecrement}>Decrement</button>
       Count: {count}
       <button onClick={() => setCount(count + 1)}>Increment</button>
       <button onClick={incrementFive}>Increment 5</button> 
    </Containerss>
  )
}

export default HookCounter

const Containerss = styled.div`
  text-align: center;

  
  button{
    background-color: tomato;
    color: #fff;
    padding: 10px 20px;
    font-size: 15px;
  }

  button:hover{
    background-color: #fff;
    color: black;
    
  }
`


export function HookCounterTwo() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    // const HandleSummit =     
  return (
    <form style={{textAlign: 'center', paddingTop: '50px'}}>
       <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })  }/>
       <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })  }/>
       <h2>Your first Name is - {name.firstName}</h2>
       <h2>Yoyur last name is - {name.lastName}</h2>
       {/* <h2>{JSON.stringify(name)}</h2> */}
    </form>
  )
}



export function HookCounterFour() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    } 
      
  return (
    <div>
        <button onClick={addItem} style={{textAlign: 'center', padding: '10px 15px', background: 'tomato', color: 'white'}}>Add a number</button>
       <ul>
        {
            items.map(item => (<li key={item.id}>{item.value}</li>
            ))}  
       </ul>
    </div>
  )
}

