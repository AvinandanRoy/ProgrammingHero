import { useState } from "react";
import "./counter1.css";

const Counter1 = () => {

    const [count , setCount ] = useState(0);

    const increaseBtn =()=>{
        const newCounter = count + 1 
        setCount(newCounter)
    }

    const decreaseBtn =()=>{
        const newCounter = count -1 ;
        setCount(newCounter)
    }

  return (
    <div className="parent">
      <h3>Avinandan Roy created Counter1 components</h3>
      <h1 className="counting">{count}</h1>
      <div className="allButton">
        <button className="btn" onClick={increaseBtn}>Increase Me </button>
        <button className="btn" onClick={decreaseBtn}>Decrease Me </button>
      </div>
    </div>
  );
};

export default Counter1;
