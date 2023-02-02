import React, { useState } from "react";
import './index.css'
import { Container } from "./Components/styles/Container.styled";
import Header from "./Components/styles/Header";
import { ThemeProvider } from "styled-components";
import { Button, TomatoButton } from "./Components/styles/Button.styled";
// import { FaHome, FaPodcast, FaTty  } from "react-icons/fa"
// import { FcAbout  } from "react-icons/fc"
// import { Input } from "./Components/styles/Container.styled";
// import { IconContext } from "react-icons";
import   Numbers  from "./Components/Map_list_keys";
import Components  from "./Components/Map_list_keys";
import Greeting, {  LoginControl, Mailbox } from "./Components/Conditional_Rendenring/Greeting";
import Bulb, { Bulbs, Bulbx } from "./Components/useState/Bulb";
import HookCounter, { HookCounterFour, HookCounterTwo } from "./Components/useState/HookCounter";
import FetchApi from "./Components/API/FetchApi";
import Greetings, { HookCounterFive, HookMouse } from "./Components/useEffect/useEffect";
import FormInput from "./Components/Form/FormInput"; 
// import Formy from "./Components/Form/FormInput";
// import { Link, Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { BookList } from "./pages/BookList";
// import Form from "./Components/Form/Form";
import MouceContainer from "./Components/useEffect/MouceContainer";
import IntervalCounter from "./Components/useEffect/IntervalCounter";





const theme = {
  colors:{
    header: 'lightblue',
    body: '#fff',
    footer: '#003333',
    prime: '#fff'
  }
}

const messages = ['React', 'Re: React', 'Re:Re React', 'Redux', 'Javascript'];

function App() {

  const [values, setValues] = useState({
    username:'',
    email:'',
    birthday:'',
    password:'',
    confirmPassword:''
  });

  const inputs = [
     {
      id: 1,
      name:'username',
      type:'text',
      placeholder: 'Username',
      errorMessage: 'Username should be 3-16 characters and should not include any specila character!',
      label: 'Username',
      pattern: '^[A-Za-z!@#$%^&*()_+]{3,19}',                    //regex pattern
      required:'true'
     },
     {
      id: 2,
      name:'email',
      type:'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address',
      label: 'Email',
      required:'true'
     },
     {
      id: 3,
      name:'birthday',
      type:'date',
      placeholder: 'birthday',
      label: 'Birthday',

     },
     {
      id: 4,
      name:'password',
      type:'password',
      placeholder: 'password',
      errorMessage: 'password sould be 8-20 characters and it should include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: 'true'
     },
     {
      id: 5,
      name:'Confirmpassword',
      type:'password',
      placeholder: 'Confirm password',
      errorMessage: 'Password do not match',
      label: 'Confirm Password',
      pattern: values.password,
      required:'true'

     }
  ]
  // console.log(username)
  // console.log('re-rendered')
  // const usernameRef = useRef()
  // console.log(re-redered)

  const handleSubmit= (e) =>{
    e.preventDefault()
    // console.log(usernameRef)
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))

  }
  const onChange = (e) => {
    setValues({  ...values, [e.target.name]: e.target.value})
   } 
  console.log(values)
  return (
    
  <ThemeProvider theme={theme}>
    <>
    {/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </nav>
    <Routes>
    <Route path="/"  element={<Home/>} />
    <Route path="/books" element={<BookList />} />
    </Routes> */}
    <Numbers/>
    <Header />
      {/* <IconContext.Provider value={{color: 'green', size: '3rem'}}>
      <h2><FaHome /> Home</h2>
      <h2><FaPodcast /> Blog</h2> 
      <h2><FcAbout/> About</h2>
      <h2><FaTty color="purple"/> Contact</h2>
    </IconContext.Provider> */}
    <Bulb/>
    <Bulbs/>
    <Bulbx/>
    <HookCounter/>
    <HookCounterTwo/>
    <HookCounterFour/>
    <HookCounterFive/>
    <FetchApi/>
    <HookMouse/>
    <MouceContainer/>
    <IntervalCounter/>
    <FormInput/>
    {/* <Form/> */}
    <Greetings 
      name={'VICSOFT'}
    />
    {/* <Greetings 
      name={'SOFTPHOENIX'}
    />
    <Greetings 
      name={'Azeez'}
    />
    <Greetings 
      name={'Azez'}
    /> */}
    <Container>
      <h2>Hello World</h2>
    </Container>

    <Button>Submit</Button>
    {/* This button component has a prime state that changes its color. When setting the primary prop to true, we are swapping out its background and text color. */}
    <Button prime>Submit</Button>
    {/* Extending Styles
    Quite frequently you might want to use a component, but change it slightly for a single case. Now, you could pass in an interpolated function and change them based on some props, but that's quite a lot of effort for overriding the styles once.

   To easily make a new component that inherits the styling of another, just wrap it in the styled() constructor. Here we use the button from the last section and create a special one, extending it with some color-related styling: */}
    <TomatoButton>Click</TomatoButton>
    {/* passed props
    If the styled target is a simple element (e.g. styled.div), styled-components passes through any known HTML attribute to the DOM. If it is a custom React component (e.g. styled(MyComponent)), styled-components passes through all props.

    This example shows how all props of the Input component are passed on to the DOM node that is mounted, as with React elements.
    
    Note how the inputColor prop is not passed to the DOM, but type and defaultValue are. That is styled-components being smart enough to filter non-standard attributes automatically for you. */}
    {/* <Input defaultValue="FirstName" type= "text" />
    <Input defaultValue="LastName" type= "text" inputColor="purple"/>
    <Input type= "Date"/> */}
    {/* <Number/> */}
    {/* <Numbers/> */}
    <Components/>
    <Greeting isloggedIn= {true}/>
    <LoginControl/>
    <Mailbox unreadMessages={messages}/>
    {/* <form>
         <FormInput placeholder='Username'/>
         <FormInput placeholder='Email'/>
         <FormInput placeholder='Full Name'/>
         <FormInput placeholder='Country'/>
    </form> */}
    <div className="formy">
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {inputs.map((input) => (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
         {/* <FormInput placeholder='Username' setUsername={setUsername}/> */}
         {/* <FormInput refer={usernameRef} placeholder='Username'/> */}

         {/* <FormInput name='email' placeholder='Email'/>
         <FormInput name='fullname' placeholder='Full Name'/>
         <FormInput name='country' placeholder='Country'/> */}
    </form>
    </div>
    </>
  </ThemeProvider>
  
  );
}


export default App;
