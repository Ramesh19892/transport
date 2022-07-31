import React, { useContext, useEffect, useState } from "react";
import HomeChild from "../components/child/HomeChild";
import { UserContext, UserDispatchContext } from "../context/UserContext";


const Home = () => {
   const userDetails =  useContext(UserContext);
   const setUserDetails = useContext(UserDispatchContext);
   const {username} = userDetails;
   const [user,updateUser] = useState({
    name:'ramesh',
   });
   const {name} = user;
   const handleChange =()=>{
    setUserDetails({
        username:name,
    })
   }
 return (
    <>
    <HomeChild/>
    <h4>{username}</h4>
    <button onClick={handleChange}>ChangeName</button>
    </>
 );
};

export default Home;
