import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser, registerUser } from "../../Redux/actions/auth";
import "./Register.css"

const Register = () => {
    const history=useHistory();
    const dispatch= useDispatch();
 const submitLogin = (event) => {
   event.preventDefault();
   const data = new FormData(event.currentTarget);
   // eslint-disable-next-line no-console
   console.log({
     Email: data.get("Email"),
     Password: data.get("Password"),
   });
   dispatch(
     loginUser(
       {
         Email: data.get("Email"),
         Password: data.get("Password"),
       },
       history
     )
   );
 };
 const submitSignup = (event) => {
   event.preventDefault();
   const data = new FormData(event.currentTarget);
   // eslint-disable-next-line no-console
   console.log({
     Nickname: data.get("Nickname"),
     Email: data.get("Email"),
     Password: data.get("Password"),
   });
   dispatch(
     registerUser(
       {
         Nickname: data.get("Nickname"),
         Firstname: data.get("First_name"),
         Lastname: data.get("Last_name"),
         Email: data.get("Email"),
         Password: data.get("Password"),
       },
       history
     )
   );
 };

useEffect(() => {
  const signInBtn = document.getElementById("signIn");
  const signUpBtn = document.getElementById("signUp");
  const container = document.querySelector(".container");

  signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  
}, [])


    return (
      <div className="Register">
        <div className={`container right-panel-active`}>
          {/* <!-- Sign Up --> */}
          <div
            className={`container__form container--signup `}
            
          >
            <form action="#" className="form" id="form1" onSubmit={submitSignup}>
              <h2 className="form__title">Sign Up</h2>
              <input type="text" placeholder="Nickname" className="input" name="Nickname"/>
              <input type="text" placeholder="First name" className="input" name="Firstname"/>
              <input type="text" placeholder="Lastname" className="input" name="Lastname"/>
              <input type="email" placeholder="Email" className="input"name="Email" />
              <input
                type="password"
                placeholder="Password"
                className="input"
                name="Password"
              />
              <button className="btn">Sign Up</button>
            </form>
          </div>

          {/* <!-- Sign In --> */}
          <div
            className={`container__form container--signin `}
            
          >
            <form action="#" className="form" id="form2" onSubmit={submitLogin}>
              <h2 className="form__title">Login</h2>
              <input type="email" placeholder="Email" className="input" name="Email"/>
              <input type="password" placeholder="Password" className="input" name="Password"/>
              <a href="/" className="link">
                Forgot your password?
              </a>
              <button className="btn">Login</button>
            </form>
          </div>

          {/* <!-- Overlay --> */}
          <div className="container__overlay">
            <div className="overlay">
              <div className="overlay__panel overlay--left">
                <button className="btn" id="signIn">
                  Login
                </button>
              </div>
              <div className="overlay__panel overlay--right">
                <button className="btn" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Register
