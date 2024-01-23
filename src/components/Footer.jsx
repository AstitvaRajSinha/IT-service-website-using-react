import React from 'react';
import {
    AiFillInstagram,AiFillTwitterCircle,AiFillGithub
  } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <footer>
        <article>
            <div>
              <a href="https://google.com" target='blank'><AiFillInstagram/></a>
              
            </div>
            <div>
              <a href="https://google.com" target='blank'><AiFillTwitterCircle/></a>
                
              
            </div>
            <div>
              <a href="https://google.com" target='blank'><AiFillGithub/></a>
                
  
            </div>
        </article>
        <h2>TechStar.</h2>
        <p> &copy;all rights reserved</p>
    </footer>
    </>
    
  )
}

export default Footer