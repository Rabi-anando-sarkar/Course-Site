import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {

  const [user,setUser] = useState({
    username : "",
    email : "" ,
    phone : "" ,
    password : "",
  });

  const navigate = useNavigate();

  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]:value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`,{
      method : "POST",
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("res from server",res_data.extraDetails);
      if(response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          username : "",
          email : "" ,
          phone : "" ,
          password : "",
        });
        toast.success("Registration Succesfull");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }

    } catch (error) {
      console.log("Register : ",error);
    } 
  }

  return (
    <>
      <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two--cols">
            <div className="registration-image">
              <img
                src="/images/register.png"
                alt=" a girl trying to register"
                width="500"
                height="500"
              />
            </div>
            <div className="registration-form">
              <h1 className="main-heading">Registration form</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    id="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="number">phone</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="phone"
                    id="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <button type="submit" className="btn btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
    </>
  );
};

export default Register;
