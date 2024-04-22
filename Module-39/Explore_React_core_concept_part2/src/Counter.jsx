import { useState } from "react";


const Counter = ()=>{
    const [count , setCount] = useState(0)
    
    const handleClick33 =()=>{
        const newCount = count + 1 
        setCount(newCount)
    }

    const handleReduce =()=>{
        const newCount = count-1 
        setCount(newCount)
    }

    return(
        <div>
            <h3>Counter start from here </h3>

            <h3>counter : {count}</h3>
            <button onClick={handleClick33}> Increase Me </button>

            <button onClick={handleReduce}>Reduce Me</button>
        </div>
    ); 
}

export default Counter ;