import { useState } from "react";

const Counter=()=>{
    const [count , setCount] = useState(0);
    const Increment=()=>{
        setCount(count+1);
    }
    const Decrement =()=>{
        setCount(count - 1);
    }
    const Resetting=()=>{
        setCount(0);
    }
    return(
    <div>
        <div>
            <button onClick={Increment} >increment</button>
            {count}
            <button onClick={Decrement} >Decrement</button>

        </div> 
        <div>  
            <button onClick={Resetting} >Resette to 0</button>

        </div>
    </div>    
    )
}

export default Counter;