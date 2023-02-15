import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUserId,userId}  = useContext(UserContext)
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('uid',user.uid);
        setUserId(user.uid);
        console.log(userId);
        navigate('/');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main className="w-screen h-screen rounded-md flex justify-center items-center">
        <section className="w-1/3">
          <div className="w-full pl-10 h-96 bg-primary my-auto mx-auto justify-center flex flex-col items-center ">
            <p className="text-3xl font-bold mb-6 text-aliceblue">LogIn</p>
            <form>
              <div className="text-lg mb-3">
                <label htmlFor="email-address">Email address</label>
                <br></br>
                <input className="w-full mt-1 outline-none px-2"
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <br></br>
                <input  className="w-full mt-1 outline-none px-2"
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="w-full flex items-center">
                <button className="bg-blue-600 mx-auto p-1 px-5" onClick={onLogin}>Login</button>
              </div>
            </form>

            <p className="text-md mt-2 text-white text-center">
              No account yet? <span className="text-blue-800 font-semibold"><NavLink to="/signup">Sign up</NavLink></span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
