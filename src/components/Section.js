import React from 'react';
import "./Section.css";
import Fade from "react-reveal/Fade";



function Section({ title, description, leftBtnText, rightBtnText, backgroundImg })
{
  console.log(title, description, leftBtnText, rightBtnText, backgroundImg)
  return (
    <div className="wrap" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div>
      </div>
      

      <Fade Bottom>
      <div className="itemText">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      </Fade>
    <div>
    
    </div>


          <Fade Bottom>
      <div className="buttonGroup">
        <button className="leftBtn">{leftBtnText}</button>
        <button className="rightBtn">{rightBtnText}</button>
      </div>
        </Fade>
        <i class="fa-solid fa-angle-down" ></i>
      
    </div>
  );
}

export default Section;
