import React from 'react'
import { Input } from '../styles/Container.styled'; 
import { FaHome, FaPodcast, FaTty  } from "react-icons/fa"
import { FcAbout  } from "react-icons/fc"
// import { Input } from "./Components/styles/Container.styled";
import { IconContext } from 'react-icons';

function UserGreeting() {
    return <>
    <h1>Welcome Back</h1>
    <IconContext.Provider value={{color: 'green', size: '3rem'}}>
      <h2><FaHome /> Home</h2>
      <h2><FaPodcast /> Blog</h2>
      <h2><FcAbout/> About</h2>
      <h2><FaTty color="purple"/> Contact</h2>
      </IconContext.Provider>
    <Input defaultValue="FirstName" type= "text" />
    <Input defaultValue="LastName" type= "text" inputColor="purple"/>
    <Input type= "Date"/>
    
 </>;
}

function GuestGreeting() {
    return <>
     <h1>Please Sign Up</h1> 
     </>;
}

export function LoginButton (props){
    return(
        <button onClick={props.click}>Login</button>
    );
}

export function LogoutButton (props) {
    return(
        <button onClick={props.click}>Logout</button>
    );
}


const Greeting = (props) => {
    const isloggedIn = props.isloggedIn
    if( isloggedIn ) {
        return <UserGreeting/>
    } else {
        return <GuestGreeting/>
    };
}
export default Greeting

export const LoginControl = (props) => {
   const  [isloggedIn, setisloggedIn] = React.useState()
   function handleloggedInClick () {
        setisloggedIn(true)
   }

   function handleloggedOutClick () {
        setisloggedIn(false)
   }

   const islogedIn = props.islogedIn
    let button
    if (islogedIn) {
        button = <LogoutButton  onClick={handleloggedOutClick}/>
    } else {
        button = <LoginButton onClick={handleloggedInClick}/>
    }
   return (
       <>
       <Greeting isloggedIn={isloggedIn}/>
       {button}
       </>
   );
}

export function Mailbox (props) {
    const unreadMessages = props.unreadMessages
    return(
        <>
        <h1>Hello</h1>
        {unreadMessages.length > 0 &&
        <h2>
            You have {unreadMessages.length} unread messsages.
        </h2>
       }     
        </>
    );
}

