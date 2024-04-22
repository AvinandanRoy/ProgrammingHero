
import './App.css'
import Counter from './Counter'

function App() {

  const handleClick =()=>{
    alert("This is Avinandan Roy.If you Want to got the premium version, mail and get key from rot15-4899@diu.edu.bd")
  }

  const handleClick2 =()=>{
    alert("I also alert you that you need a premium subscription from the wathing movies with high quality and you got also downloading feature from this :)")
  }

  const addToFive =(num)=>{
    alert(5+num)
  }

  return (
    <div>
      <h3>Core Concept part2</h3>
      <button onClick={handleClick}>Click Me 1 </button>
      <button onClick={handleClick2}>Click Me 2 </button>

      <button onClick={()=>alert('Alerting for third times ')}>Click Me 3 </button>

      {/* vejailla */}
      <button onClick={()=>addToFive(4)}>Click Me 4</button>


      <Counter></Counter>
    </div>
  )
}

export default App
