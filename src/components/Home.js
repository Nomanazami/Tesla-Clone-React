import React from 'react'
// import styled from 'styled-components'
import Section from './Section'
import "./home.css"
import car1 from "../Images/model-3.jpg"
import car2 from "../Images/model-x.jpg"
import car3 from "../Images/model-y.jpg"
import car4 from "../Images/model-s.jpg"
import accessories from "../Images/accessories.jpg"
import solarroof from "../Images/solar-roof.jpg"
import solarpanel from "../Images/solar-panel.jpg"

function Home() {
  return (
    <div className='container'>
        <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={car1}
        leftBtnText="Custom Order" 
        rightBtnText="Existing Inventory" />

        <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={car2}
        leftBtnText="Custom Order" 
        rightBtnText="Existing Inventory" />
        <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={car4}
        leftBtnText="Custom Order" 
        rightBtnText="Existing Inventory" />
        <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={car3}
        leftBtnText="Custom Order" 
        rightBtnText="Existing Inventory" />
        <Section 
        title="Lowest Cost Solar Panels In America"
        description="Money-back guarantee"
        backgroundImg={solarpanel}
        leftBtnText="Custom Order" 
        rightBtnText="Existing Inventory" />
        <Section 
        title="Solar For New Roofs"
        description="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
        backgroundImg={solarroof}
        leftBtnText="Custom Order" 
        rightBtnText="Existing Inventory" />
        <Section 
        title="Accessories"
        backgroundImg={accessories}
        leftBtnText="Shop Now" 
        rightBtnText="Online Payment" />
      
    </div>
  )
}

export default Home
