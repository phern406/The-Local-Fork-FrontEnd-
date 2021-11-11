// From the office hours.
import React, { useState, useEffect } from "react";
// import axios from 'axios';

function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("mytoken"));
    console.log(userData.user);
    setData(userData.user);

  }, []);
  
  // useEffect(() => {
  // };
  //   axios.get(`http://localhost:5000/review/review/617e82a3eaffff441598afd7`).then((res) => {
  //     // console.log(res);
  //   //   setData(res.data.reviewData[0]);
  //  setData(res.data);
  //     console.log(res)
      
  //   });
  // }, []);
  return (
    <ul>
      <h2>This is {data.username}'s Page</h2>
      <div>
        <li>First Name:   {data.firstname}</li>
        <li>Last Name:   {data.lastname}</li>
        <li>City:   {data.city}</li>
        <li>Tagline:  {data.tagline}</li>
        <li>Username:   {data.username}</li>
        <br/>
        <button >Click to see reviews</button>
        <p>{data.firstname} {data.lastname}</p>
        {/* <li>Last Name:   {data.lastname}</li> */}
        <p>{data.city}</p>
        <p>{data.tagline}</p>
        {/* <li>{data.username}</li> */}
      </div>
    </ul>
  );
}
export default Profile;