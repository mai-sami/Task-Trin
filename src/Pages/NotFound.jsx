import React, { useEffect } from 'react'
import notFound from "../assets/Group 491.png";
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navgate=useNavigate()

  useEffect(()=>{
    setTimeout(() => {
      navgate('/')
     }, 2000);
  
  },[])
  return (
    <div className='intro'>
            <h1 style={{ margin: "3rem", color: "#888226" }}>
              Sorry , Page not Found 
            </h1>
            <img src={notFound} alt="notFound" />
          </div>
  )
}

export default NotFound