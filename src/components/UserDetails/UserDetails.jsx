import React from 'react';
import { useLoaderData} from 'react-router';



const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div>
            <h2>user details here</h2>
            <h3>{user.name}</h3>
            <p>{user.website}</p>

  <button onClick={()=> navigate(-1)}>go back</button>
          
        </div>
    );
};

export default UserDetails;