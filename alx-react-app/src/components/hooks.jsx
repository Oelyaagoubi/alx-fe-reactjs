
import { useState } from "react"


const StateHooks =()=>{
    const [count , setCount] = useState(0)
    const increment =()=>{
        setCount(prevCount => prevCount+1)
    }
    const dincrement=()=>{
        setCount(prevCount=>prevCount-1)
    }
    return(
        <>
        <button onClick={increment}>increment</button>
        <p>{count}</p>
        <button onClick={dincrement}>increment</button>
        </>
    )
}

export default StateHooks























// const StateHooks = ()=>{
//     const [counter , setCounter] = useState(0);
//     const increment =()=>{
//         setCounter(counter+1);
//     }
//     const dincrement =()=>{
//         setCounter(counter-1);

//     };
//     return(
//         <div>
//             <button onClick={dincrement}>increment</button>
//             {counter}
//             <button onClick={increment}>increment</button>
//         </div>
//     )

// }

// export default StateHooks;


// export default function StateHooks(){
//     const [InputValue , setInputValue] = useState("oualid");

//     const ChangeValue =(event)=>{
//         if(event.key ==='Enter'){
//             setInputValue(event.target.value);
//         }
        
        
        
//     }

//     return(
//         <div>
//             <input onKeyDown={ChangeValue}
//              type="text"  placeholder="enter something"/>
//             {InputValue}
//         </div>
//     )
// }