import React from 'react';
import { Link, useNavigate } from 'react-router';

const User = ({user}) => {
   const navigate = useNavigate();
   const handleNavigate =()=>{
    navigate(`/users/${user.id}`)
   }




    console.log(user);
    const style ={
        border:"2px solid red",
        padding: "20px",
        margin:"10px"

    }
    return (
        <div style={style}>
            <h2>{user.name}</h2>
            <p>{user.phone}</p>
            <small>{user.website}</small>
            <br />

            <Link to={`/users/${user.id}`}>Show details</Link>

            <button onClick={handleNavigate}>Detail of : {user.id} </button>
        </div>
    );
};

export default User;