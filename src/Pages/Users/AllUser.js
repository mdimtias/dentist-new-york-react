import React, { useEffect, useState } from 'react';

const AllUser = () => {
    
    const [users, setUsers] = useState();
    useEffect(()=>{
        fetch("http://localhost:5000/user", {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(data=>setUsers(data.reverse()))
    }, [])
    
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>          
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i)=>{
                return(
                    <tr key={user?._id}>
                    <th>{i+1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                </tr>
                )
            })}
           
          </tbody>
        </table>
      </div>
    );
};

export default AllUser;