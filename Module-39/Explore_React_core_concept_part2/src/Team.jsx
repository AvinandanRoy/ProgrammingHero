import { useState } from "react";

const countInitial =() =>{
  console.log('Avinandan Roy Shanto count initial value.')
  return 10 ;
}


const Team = () => {

    const par ={maxWidth:'400px', margin: '0 auto' , display : 'flex' ,justifyContent : 'center' , gap : '20px'}
    const btn ={padding : '10px 20px'}

    const [count , setCount] = useState(() => countInitial())

    const decrementCount = () =>{
      setCount( (prevCount) => prevCount - 1  )
    }

    const incrementCount = () =>{
      setCount(prevCount => prevCount + 1 )
    }

  return (
    <div>
      <h3>Avinandan Roy created Team component</h3>
      <div style={par}>
        <button style={btn} onClick={incrementCount}>+</button>
        <h3>{count}</h3>
        <button style={btn} onClick={decrementCount}>-</button>
      </div>
    </div>
  );
};

export default Team;
