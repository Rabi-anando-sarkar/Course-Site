import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const Login = () => {
  const [user,setUser] = useState({
    email : "",
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(user),
      });
      
      const res_data = await response.json();

      if(response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          email : "",
          password : "",
        });
        toast.success("Login Succesfull");
        navigate('/');
      } else {
        console.log("Invalid Credentials");
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("Login : ",error);
    }
  }

  return (
    <>
      <section>
        <main>
          <div className='section-registration'>
            <div className='container grid grid-two--cols'>
              <div className='registration-image'>
                <img
                  src='/images/login.png'
                  alt='a person is trying to login'
                  width='500'
                  height='500'
                />
              </div>
              <div className='registration-form'>
                <h1 className='main-heading mb-3'>Login Form</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor='email'>Email</label>
                    <input
                      type="email"
                      name='email'
                      placeholder='email'
                      id='email'
                      required
                      autoComplete='off'
                      onChange={handleInput}
                      value={user.email}
                    />
                  </div>
                  <br/>
                  <div>
                    <label htmlFor='password'>Password</label>
                    <input
                      type="password"
                      name='password'
                      placeholder='password'
                      id='password'
                      required
                      autoComplete='off'
                      onChange={handleInput}
                      value={user.password}
                    />
                  </div>
                  <button type='submit' className='btn btn-submit'>
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Login