import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import axios from 'axios'
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const addUser = async(id) =>{
    try{
      await axios.post('http://localhost:5000/users/add',{id:id, userName : user,email:email,password:password });
    }catch(err){
      console.log(err);
    }
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const id = user.uid;
        localStorage.setItem("uid",id); 
        addUser(id);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main className="w-screen h-screen rounded-md flex justify-center items-center">
      <section className="w-1/3">
        <div className="w-full pl-10 h-96 bg-primary my-auto mx-auto justify-center flex flex-col items-center ">
          <h1 className="text-3xl font-bold mb-6 text-aliceblue"> SignUp </h1>
          <form>
            <div className="text-lg mb-3">
              <label htmlFor="email-address">User Name</label>
              <br></br>
              <input
                className="w-full mt-1 outline-none px-2"
                type="name"
                label="User Name"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="email-address">Email address</label>
              <br></br>
              <input
                className="w-full mt-1 outline-none px-2"
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <br></br>
              <input
                className="w-full mt-1 outline-none px-2"
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <div className="w-full flex items-center">
              <button
                className="bg-blue-600 mx-auto p-1 px-5"
                onClick={onSubmit}
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="text-md mt-2 text-white text-center">
            Already have an account?{" "}
            <span  className="text-blue-800 font-semibold">
            <NavLink to="/login">
              Sign in
            </NavLink>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;
