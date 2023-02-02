import React,{useState} from 'react'
import styled from 'styled-components'
import  bulbOff  from './image/bulb-off.png'
import  bulbOn  from './image/bulb-on.png'


const Bulb = () => {
    // const stateArray = useState(false)
    // console.log(stateArray[0])
    const [on, setOn] = useState(false)
    const lightOn = () => setOn(true)
    const lightOff = () => setOn(false)
  return (
    <LayoutContainer >
    {/* <div className={stateArray[0] ? 'bulb-on' : 'bulb-off'}>Bulb</div> */}
    <div className={ on ? 'bulb-on' : 'bulb-off'}></div>
    <button onClick={lightOn}>On</button>
    <button onClick={lightOff}>Off</button>
    {/* <img src={bulb} /> */}
    </LayoutContainer>
  )
} 

export default Bulb

// export function Bulbs (){
//     const [on, setOn] = useState(false);
//     const lightSwitch = () => setOn(on => !on);
//     return(
//     <>
//         <div className={on ? 'bulbs-on' : 'bulbs-off'}></div>
//         <button onClick={lightSwitch}>On/off</button>
//     </>
//     )
// }


const LayoutContainer = styled.div`
text-align: center;
padding: 80px;

.bulb-off,
.bulb-on {
    width: 120px;
    height: 120px;
    background-repeat: no-repeat;
    background-size:100px;
    display: inline-block; 
    

}

.bulb-off:last-of-type,
.bulb-on:last-of-type {
    margin : 10px;
}

.bulb-off {
    background-image:url(${bulbOff}); 
   
}
.bulb-on {
    background-image:url(${bulbOn}); 
    
}
 
button {
    margin-top: 20px;
    margin-left: 10px;
}

`
export function Bulbs (){
    const [on, setOn] = useState(false);
    const lightSwitch = () => setOn(on => !on);
    return(
    <>
    <Containers>
        <div className={on ? 'bulbs-on' : 'bulbs-off'}></div>
        <button onClick={lightSwitch}>On/off</button>
    </Containers>
    </>
    )
}
const Containers = styled.div`
 text-align: center;
 padding-top: 30px;

 .bulbs-on,
 .bulbs-off{
    width: 120px;
    height: 120px;
    background-repeat: no-repeat ;
    background-size: 100px;
    display: inline-block;
 }

 .bulbs-on,:last-of-type
 .bulbs-off,:last-of-type {
    margin: 10px;
 }

 .bulbs-off {
    background-image: url(${bulbOff});
 }
 .bulbs-on {
    background-image: url(${bulbOn});
 }

 
 button {
    margin-top: 20px;
    margin-left: 10px;
}
`

// Multiple State

export function Bulbx() {
    const [on, setOn] = useState(false)
    const [count, setCount] = useState(1)

    const lightSwith = () => setOn(on => !on);
    const addBulbx = () => setCount(count => count + 1)

    const bulb = <div className={on ? 'bulbs-on' : 'bulbs-off'} />;
    const bulbs = Array(count).fill(bulb)

    return(
        <ContainerOne>
           <div className={bulbs}>{bulbs}</div>
           <button onClick={lightSwith}>on/off</button>
           <button onClick={addBulbx}>add bulb</button>
        </ContainerOne>
    )

}
const ContainerOne = styled.div`
  text-align: center;
  margin: 80px;

  .bulb-on,
  .bulb-off{
    height: 120px;
    width: 120px;
    background-repeat: no-repeat;
    background-size:100px;
    display: inline-block;
  }

 .bulbs-on,:last-of-type
 .bulbs-off,:last-of-type {
    margin: 10px;
 }

 .bulbs-on{
    background-image: url(${bulbOff});
}
.bulbs-off{
    background-image: url(${bulbOn});
}

`

