import React from 'react'
import "./Register.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Register() {
  const nav = useNavigate();
  const { register, handleSubmit, reset } = useForm();
    let submitLogic = (data)=>
    {
      const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
  //  alert("Registered successful");
   nav('/login');
   reset();
    }

    
  return (
    <>
    <div className="register-container">
    <form className="register-form" onSubmit={handleSubmit(submitLogic)}>
       <h2>Create Account</h2>
      <input
      type="text"
      placeholder='Full Name'
      {...register("name",{required:true})}
      />
    
       <input
      type="password"
      placeholder='password'
      {...register("password",{required:true})}
      />
  
       <input
      type="email"
      placeholder='email'
      {...register("email",{required:true})}
      />
      
       <input
      type="number"
      placeholder='Mobile Number'                             
      {...register("mobile",{required:true})}
      />
     
     <button type='submit'>Register</button>
    </form>
    </div>
    </>
  )
}

export default Register
