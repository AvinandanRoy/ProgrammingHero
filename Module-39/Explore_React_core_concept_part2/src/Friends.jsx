import { useEffect, useState } from 'react';
import './friends.css'
import SecondFriend from './SecondFriend';

const Friends = () =>{

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])



    return(
        <div className="box">
            <h3>Friends : {friends.length} </h3>
            {
                friends.map(friend => <SecondFriend friend={friend}></SecondFriend>)
            }
        </div>
    );
};

export default Friends ;