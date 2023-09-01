import React from 'react';

import './FirstStep.scss';
import Description from '../../components/Description';
import { dataMFContext } from '../../App';

const FirstStep = () => {
    
  const { dataTotal, setDataTotal } = React.useContext(dataMFContext);
  const [name, setName] = React.useState(dataTotal.name);

  const handleName = (e) => {
   
    setDataTotal(prevState => ({ ...prevState, name: e.target.value }));
    setName(dataTotal.name)
   
  }

  return (  
    <>
      <Description title="Personal info" text="Please provide your name, email address, and phone number." />       
    
          <form className="form-person">
          <div className="form-person__block name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='e.g. Stephen King' onChange={handleName} value={name} />    
          </div>
          <div className="form-person__block email">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" placeholder="e.g. stephenking@lorem.com" />    
          </div>
          <div className="form-person__block phone">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="e.g. +1 234 567 890" />    
          </div>          
      </form>
      </>
      
  )
}

export default FirstStep
