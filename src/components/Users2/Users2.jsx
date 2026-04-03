import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    
    const user = use(usersPromise)
    console.log(user);
    return (
        <div>
            <h2>this is users 2 data</h2>
        </div>
    );
};

export default Users2;