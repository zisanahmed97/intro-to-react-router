import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
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
        </div>
    );
};

export default User;