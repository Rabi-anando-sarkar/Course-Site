import React from 'react'
import { useAuth } from "../store/auth";

const About = () => {

  const {user} = useAuth();
  
  return (
    <>
      <main>
      <section className='section-hero'>
          <div className='container grid grid-two--cols'>
            <div className='hero-content'>
              <p>Welcome,{user ? ` ${user.username} to our website` : 'to our website'}</p>
              <h1>Why choose us?</h1>
              <p>Are you ready to take your business to the next level with cutting edge IT
                solutons? Look no further! At Rabi Site.
              </p>
              <p>Are you ready to take your business to the next level with cutting edge IT
                solutons? Look no further! At Rabi Site.
              </p>
              <p>Are you ready to take your business to the next level with cutting edge IT
                solutons? Look no further! At Rabi Site.
              </p>
              <p>Are you ready to take your business to the next level with cutting edge IT
                solutons? Look no further! At Rabi Site.
              </p>
              <div className='btn btn-group'>
                <a href='/contact'>
                  <button className='btn'>Connect Now</button>
                </a>
                <a href='/services'>
                  <button className='btn secondary-btn'>Learn More</button>
                </a>
              </div>
            </div>
            <div className='hero-image'>
              <img
                src='/images/about.png'
                alt='hero image'
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>
      </main>
      <section className='section-analytics'>
        <div className='container grid grid-four--cols'>
          <div className='div1'>
            <h2>50+</h2>
            <p>Registered companies</p>
          </div>
          <div className='div1'>
            <h2>100,00+</h2>
            <p>Happy clients</p>
          </div>
          <div className='div1'>
            <h2>500+</h2>
            <p>Well known devs</p>
          </div>
          <div className='div1'>
            <h2>24/7</h2>
            <p>services</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About