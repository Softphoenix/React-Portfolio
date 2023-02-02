import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export function HookCounterFive() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
      console.log('useEffect - updating document title')
        document.title = `You Click ${count} times`
    }, [count])

   return (
     <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={() => setCount(count + 1)}>Click  {count} times</button>
     </div>
   )
 };
 
 export function HookMouse()  {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  // USING useEffect CODE WIT CLEAN UP CODE 
  
  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [ ])

     return(
      <>
         Hooks X - {x} Y - {y}
      </>
     )

 }
 

function Greetings({ name }) {
    const [users, setUsers] = useState([])
    const message = `Hello, ${name}!`

    useEffect(() => {
        document.title = `Hello ${name}`
        console.log(name)
    }, [name])

    useEffect(() => {
        async function fetchAllUsers() {
             try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const fetchedUsers = await response.json(response)
                setUsers(fetchedUsers)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllUsers()
    }, [])
  return (
    <LayoutCard>
        <h1>
        {message}
        </h1>
       <div className='cardContainer'>
        {users?.map(({id, name, username, email, address:{street, suite, city, zipcode, geo:{lat, Ing}}, phone, website, company:{Name, catchPhrase, bs}}) => (
          <div key={id} className='card'>
            <h1>Name: {name}</h1>
            <h2>UserName: {username}</h2>
            <h3>Street: {street}{suite}</h3>
            <h3>City: {city}</h3>
            <h3>Zipcode:{zipcode}</h3>
            <h3>Lat: {lat}</h3>
            <h3>Ing: {Ing}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>
            <h3>CompanyName: {Name}</h3>
            <h3>catchPhrase: {catchPhrase}</h3>
            <h3>Bs: {bs}</h3>
            {/* <h3>{}</h3> */}
            <p>Email: {email}</p>
          </div>
        ))}
       </div>
    </LayoutCard>
  )
}

export default Greetings

const LayoutCard = styled.div`
    background-color: aliceblue;

    .cardContainer{
      min-height: 200px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 15px;
    }
    
    .card{
    border: 2px solid blue;
    border-radius: 15px;  
    padding-left: 5px;
}

`

 

 