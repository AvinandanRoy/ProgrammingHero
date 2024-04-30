import { useState } from "react";


const Team1 = ()=>{

    const [teamCount , setTeam ] = useState(11);

    const addPlayer = ()=>{
        const newTeamCount = teamCount+ 1 ;
        setTeam(newTeamCount)
    }

    const removePlayer =()=>{
        const newTeamCount = teamCount -1 ;
        newTeamCount <= 0? setTeam(1):setTeam(newTeamCount)
    }

    const teamStyle = {
        border : '3px solid green',
        padding : '20px',
        borderRadius : '10px',
        textAlign : 'center'
    }

    const buttonStyle ={
        display : 'flex',
        gap : '20px',
        justifyContent : 'center'
    }

    return(
        <div style={teamStyle}>
            <h3>Player :{teamCount} </h3>
            <div style={buttonStyle}>
                <button onClick={addPlayer}>Add</button>
                <button onClick={removePlayer}>Remove</button>
            </div>
        </div>
    );
};

export default Team1;