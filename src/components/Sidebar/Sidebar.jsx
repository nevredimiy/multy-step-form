import React from 'react'

import './Sidebar.scss';
import SidebarItem from './SidebarItem';
import { stepsData } from './data';

const Sidebar = ({ currentStep, changeStep }) => {
  
  return (
    <div className='sidebar'>
      <ul className='sidebar__list'>
        {stepsData.map((item, index) => {
          let activeStep = '';
          if (currentStep === index) { activeStep = 'active' }
          return <SidebarItem key={index} id={index} text={index + 1} classNameItem={`sidebar__item ${activeStep}`} classNameSwitch='sidebar__switch' name={item.name} changeStep={changeStep} />
        })}              
      </ul>    
    </div>
  )
}

export default Sidebar
