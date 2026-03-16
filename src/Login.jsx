import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const { register, handleSubmit, reset } = useForm();
  const nav = useNavigate();

  const loginLogics = (loginData) => {

    const Registeredusers = JSON.parse(localStorage.getItem("users")) || [];

    const user = Registeredusers.find(
      (user) =>
        user.email === loginData.email &&
        user.password === loginData.password
    );

    if (user) {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));

      reset();
      nav("/Msg");

    } else {

      alert("Register first");
      reset();

    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h2>Login</h2>

        <form onSubmit={handleSubmit(loginLogics)}>

          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />

          <button type="submit">Login</button>

        </form>

      </div>

    </div>
  );
}

export default Login;