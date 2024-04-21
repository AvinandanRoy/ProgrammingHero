import Actor from "./Actor";
import "./App.css";
import Singer from "./Singer";
import ToDo from "./ToDo";

function App() {
  const actors = ["Krishna", "Sakib", "Riaz", "Rubel", "RAz"];

  const singers = [
    { name: "Pranta Roy", age: 18 },
    { name: "Lipika Rani roy", age: 40 },
    { name: "Shanta Roy", age: 23 },
    { name: "Krishna Kanta Roy", age: 50 },
  ];

  const name = "Avinandan Roy";
  const fatherName = "Krishna Kanta Roy";
  const motherName = "Lipika Rani Roy";
  return (
    <>
      <h1>Avinandan Roy</h1>

      <p>
        My name is {name}.My Father name is {fatherName} .My Mother name is{" "}
        {motherName}{" "}
      </p>
      <PersonInfo></PersonInfo>
      <TotalMoney></TotalMoney>
      <Developer></Developer>
      <Device sname="Personal Computer" price="50k"></Device>
      <Device sname="Mobile" price="15k"></Device>
      <Device sname="Apple Watch" price="100k"></Device>
      <Device sname="Play Station" price="150k"></Device>

      <Student
        name="Avinandan Roy"
        sid="221-15-4899"
        age="23"
        cgpa={3.89}
      ></Student>
      <Student name="Pranta Roy" sid="221-15-1111" age="19"></Student>

      <ToDo
        taskname="8.00"
        taskDetails="Wake up from the sleep."
        isdone={true}
      ></ToDo>
      <ToDo
        taskname="10.00"
        taskDetails="Doing Breakfast with bread and JAm"
        isdone={false}
      ></ToDo>

      <Actor name="Avinandan Roy"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      <h1>Bangladesh Best Singers List and their age: </h1>
      {singers.map((singer) => (
        <Singer name={singer.name} age={singer.age}></Singer>
      ))}
    </>
  );
}

const PersonInfo = () => {
  // const age = 23 ;
  const name = "Avinandan Roy";
  return name;
};

const TotalMoney = () => {
  const bankMoney = 0;
  const pocketMoney = 2700;

  return (
    <div className="student">
      <h3>
        {" "}
        <PersonInfo></PersonInfo> Total money is {pocketMoney + bankMoney}{" "}
      </h3>
    </div>
  );
};

const Developer = () => {
  const developerDtyule = {
    margin: "20px",
    padding: "20px",
    border: "2px solid green",
    borderRadius: "20px",
  };
  return (
    <div style={developerDtyule}>
      <h5>Devo Devo</h5>
      <p>Coding</p>
    </div>
  );
};

const Device = ({ sname, price }) => {
  // console.log(props)
  return (
    <div>
      <h3>This Device is : {sname}</h3>
      <h5>Price is : {price}</h5>
    </div>
  );
};

const Student = ({ name, sid, age, cgpa = 5.999 }) => {
  return (
    <div className="student">
      <h3>Name : {name} </h3>
      <h3>Student Id : {sid} </h3>
      <h3>Age : {age} </h3>
      <h3>Last Semester CGPA : {cgpa} </h3>
    </div>
  );
};
export default App;
