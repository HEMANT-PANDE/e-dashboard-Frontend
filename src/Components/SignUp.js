import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
      navigate('/');
    }
  })

   const Collectdata = async () => {
     console.warn(name, email, password);
     try {
       let result = await fetch("http://localhost:3000/register", {
         method: "POST", // Ensure the method is capitalized
         body: JSON.stringify({ name, email, password }), // Fixed typo here
         headers: {
           "Content-Type": "application/json",
         },
       });
       result = await result.json();
       console.warn(result);
       if(result){
        localStorage.setItem("user",JSON.stringify(result))
        navigate('/')
       }
     } catch (error) {
       console.error("Error:", error); // Add error handling
     }
   };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={Collectdata} className="appButton" type="button">
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
