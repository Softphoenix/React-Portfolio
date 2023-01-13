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
import Greeting, { LoginButton, LoginControl, LogoutButton, Mailbox } from "./Components/Conditional_Rendenring/Greeting";

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
  return (
    
  <ThemeProvider theme={theme}>
    <>
    <LoginButton/>
    <LogoutButton/>
    <Numbers/>
    
    <Header />
      {/* <IconContext.Provider value={{color: 'green', size: '3rem'}}>
      <h2><FaHome /> Home</h2>
      <h2><FaPodcast /> Blog</h2>
      <h2><FcAbout/> About</h2>
      <h2><FaTty color="purple"/> Contact</h2>
      </IconContext.Provider> */}
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
    </>
  </ThemeProvider>
  
  );
}

export default App;
