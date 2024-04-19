import './App.css'

function App() {
  const name =  'Avinandan Roy'
  const fatherName = 'Krishna Kanta Roy';
  const motherName = 'Lipika Rani Roy'
  return (
    <>
      <h1>Avinandan Roy</h1>

      <p>My name is {name}.My Father name is {fatherName} .My Mother name is {motherName} </p>
      <PersonInfo></PersonInfo>
      <TotalMoney></TotalMoney>
      <Developer></Developer>
      <Device sname = 'Personal Computer' price = '50k'></Device>
      <Device sname = 'Mobile' price = '15k'></Device>
      <Device sname = 'Apple Watch' price = '100k'></Device>
      <Device sname = "Play Station" price = '150k'></Device>
      <Student name = 'Avinandan Roy' sid ='221-15-4899' age = '23' cgpa = '3.89'></Student>

      <Student name = 'Pranta Roy' sid ='221-15-1111' age = '19' cgpa = '4.0'></Student>
    </>
  )
}

const PersonInfo =()=>{
    // const age = 23 ;
    const name = 'Avinandan Roy' ;
    return name;
}

const TotalMoney =()=>{
    const bankMoney = 0 ;
    const pocketMoney = 2700 ;

    return(
        <div className='student'>
            <h3> <PersonInfo></PersonInfo> Total money is {pocketMoney+bankMoney} </h3>
        </div>
    );
}

const Developer =()=>{

  const developerDtyule ={
    margin : '20px',
    padding : '20px',
    border : '2px solid green',
    borderRadius : '20px'
  }
  return(
    <div style={developerDtyule}>
      <h5>Devo Devo</h5>
      <p>Coding</p>
    </div>
  );
}

const Device =(props) =>{
  // console.log(props)
  return(
    <div>
      <h3>This Device is : {props.sname}</h3>
      <h5>Price is : {props.price}</h5>
    </div>
  );
}

const Student =(props)=>{
  return(
    <div className='student'>
      <h3>Name : {props.name} </h3>
      <h3>Student Id : {props.sid} </h3>
      <h3>Age : {props.age} </h3>
      <h3>Last Semester CGPA : {props.cgpa} </h3>
    </div>
  )
}
export default App;
