import React from "react"

 export const Number = [1, 2, 3, 4, 5, 6]
 console.log(Number)
 export const Doubled = Number.map((number) => number * 2);
 console.log(Doubled)

// export const numbers = [4, 5, 6, 7, 8]

// const NumberList = numbers.map((number) => <li>{numbers}</li>)
// const number = [2, 3, 4, 5, 6, 7]

export const Numbers = (props) => {
    const numb = props.numb
    const numberlist = numb.map((number) =>  <li>{number}</li> )
    return(
    <>
        <h>Number list</h>
        <ul>{numberlist}</ul>
    </> 
    );
}






const Components = () => {
    return(
       <>
       {Number}
       {Numbers} 
       </>
    );
}
export default Components